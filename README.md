IntertechHub Internship Project - Stage 3: Books Collection API
This project is the third stage of the IntertechHub Internship, providing a Books Collection API that allows users to sign up, log in, and manage their book collection. This API is designed with user authentication and authorization features using JWT (JSON Web Token).

API Base URL
The base URL for the API is:

arduino
Copy code
https://books-collection-stage3.onrender.com
API Endpoints
1. Sign Up (User Registration)
Endpoint: /api/auth/signup

Method: POST
Description: This endpoint allows a new user to sign up and create an account.
Request Body
json
Copy code
{
  "email": "newuser@example.com",
  "password": "yourPassword123",
  "name": "New User"
}
email: User's email address (unique).
password: User's password (minimum length might be enforced).
name: User's full name.
Response
Success (201 Created)

json
Copy code
{
  "message": "User registered successfully"
}
Error (400 Bad Request)

json
Copy code
{
  "message": "Email is already registered"
}
json
Copy code
{
  "message": "All fields are required"
}
2. Log In (User Authentication)
Endpoint: /api/auth/login

Method: POST
Description: This endpoint allows users to log in and get a JWT token.
Request Body
json
Copy code
{
  "email": "newuser@example.com",
  "password": "yourPassword123"
}
email: Registered email address of the user.
password: The user's password.
Response
Success (200 OK)

json
Copy code
{
  "token": "jwt_token_here"
}
Error (401 Unauthorized)

json
Copy code
{
  "message": "Invalid email or password"
}
3. Get All Books (Protected Route)
Endpoint: /api/books

Method: GET
Description: This endpoint allows authenticated users to get a list of all books.
Headers
Authorization: Bearer <jwt_token_here>
Response
Success (200 OK)

json
Copy code
[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name",
    "description": "Book description here"
  },
  ...
]
Error (401 Unauthorized)

json
Copy code
{
  "message": "Access denied. No token provided."
}
4. Add a New Book (Protected Route)
Endpoint: /api/books

Method: POST
Description: This endpoint allows authenticated users to add a new book to the collection.
Headers
Authorization: Bearer <jwt_token_here>
Request Body
json
Copy code
{
  "title": "New Book Title",
  "author": "Author Name",
  "description": "Book description here"
}
title: The title of the book.
author: The author of the book.
description: A brief description of the book.
Response
Success (201 Created)

json
Copy code
{
  "message": "Book added successfully"
}
Error (400 Bad Request)

json
Copy code
{
  "message": "All fields are required"
}
5. Delete a Book (Protected Route)
Endpoint: /api/books/:id

Method: DELETE
Description: This endpoint allows authenticated users to delete a specific book by its ID.
Headers
Authorization: Bearer <jwt_token_here>
Response
Success (200 OK)

json
Copy code
{
  "message": "Book deleted successfully"
}
Error (404 Not Found)

json
Copy code
{
  "message": "Book not found"
}
How to Use the API with Postman
Follow these steps to test the API using Postman:

Set Up Postman:
Download and install Postman.
Open Postman and create a new request.
Testing the Sign-Up Endpoint
Method: POST
URL: https://books-collection-stage3.onrender.com/api/auth/signup
Body:
Select raw and JSON.
Provide the required fields, for example:
json
Copy code
{
  "email": "newuser@example.com",
  "password": "yourPassword123",
  "name": "New User"
}
Testing the Login Endpoint
Method: POST
URL: https://books-collection-stage3.onrender.com/api/auth/login
Body:
Select raw and JSON.
Provide the login credentials:
json
Copy code
{
  "email": "newuser@example.com",
  "password": "yourPassword123"
}
Response: The response will contain a JWT token that you will use in subsequent requests.
Testing the Protected Routes
Method: GET, POST, or DELETE depending on the route you want to test.

Headers:

Add a new header: Authorization: Bearer <jwt_token_here>, where <jwt_token_here> is the token you received from the login endpoint.
URL: Example:

To get all books: https://books-collection-stage3.onrender.com/api/books
To add a new book: https://books-collection-stage3.onrender.com/api/books
To delete a book: https://books-collection-stage3.onrender.com/api/books/:id
Testing the GET, POST, and DELETE Endpoints
GET /api/books: Retrieve all books.
POST /api/books: Add a new book. Provide the necessary details in the body.
DELETE /api/books/:id: Delete a book by ID.
Environment Variables
This API uses environment variables to store sensitive data such as the JWT secret key. Make sure to set the following variables in your .env file:

makefile
Copy code
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key