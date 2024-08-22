from flask import Flask, request, jsonify
import redis
import json
import uuid

app = Flask(__name__)

# Initialize Redis client
redis_client = redis.StrictRedis(host='redis', port=6379, db=0)

@app.route('/login', methods=['POST'])
def login():
    # Generate a unique request ID
    request_id = str(uuid.uuid4())
    
    # Get JSON data from request
    data = request.json
    
    # Extract username and password
    username = data.get('username')
    password = data.get('password')
    
    # Create log_request dictionary with all values as strings
    log_request = {
        "request_type": "get_user_by_username",
        "payload": json.dumps({
            "username": username,
            "password": password
        })
    }
    
    # Store the request log in Redis hash with the request ID as the key
    redis_client.hset(f'RQ_USER:{request_id}', mapping=log_request)
    
    # Set an expiration time of 60 seconds for the log entry
    redis_client.expire(f'RQ_USER:{request_id}', 60)

    
    # Check credentials (dummy check for demonstration)
    if username == "user@test.com" and password == "pass123":
        return jsonify({"message": "Login successful", "request_id": request_id}), 200
    else:
        return jsonify({"message": "Invalid username or password", "request_id": request_id}), 401

if __name__ == '__main__':
    app.run(debug=True)
