from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample credentials
USERNAME = "user@test.com"
PASSWORD = "pass123"

@app.route('/login', methods=['POST'])
def login():
    # Get JSON data from request
    data = request.json
    
    # Extract username and password
    username = data.get('username')
    password = data.get('password')
    
    # Check credentials
    if username == USERNAME and password == PASSWORD:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
