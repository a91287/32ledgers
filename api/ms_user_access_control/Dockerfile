# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir Flask gunicorn

# Expose the port your app runs on
EXPOSE 5000

# Command to run the app with Gunicorn in production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "auth:app"]
