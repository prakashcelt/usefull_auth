## usefull_auth
### Overview

usefull_auth is a backend application designed to handle user authentication with email verification. The backend is built using Express.js and MongoDB. For API testing, Bruno is utilized, and Mailtrap is used for sending email verification tokens.

Features

    User Authentication: Secure signup and login functionality with hashed passwords.
    Email Verification: Sends a verification token to the user's email upon signup.
    JWT Authentication: Generates JWT tokens to authenticate users.
    API Testing: Utilizes Bruno for testing the API endpoints.
    Database: MongoDB is used as the database for storing user data.
    Environment Variables: Uses .env file for configuration.

Tech Stack

    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JWT (JSON Web Token)
    Email Service: Mailtrap
    API Testing: Bruno