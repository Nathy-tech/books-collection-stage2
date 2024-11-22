# Books Collection API

This is a simple CRUD API for managing a collection of books. It allows users to add, retrieve, update, and delete books from the database. The API is built with **Node.js** and **MongoDB**, using the **Express.js** framework for routing.

## Internship Project

This project is part of the **InterTechHub Backend Track Stage 2** internship. It is designed to demonstrate the use of **Node.js**, **MongoDB**, and **Express.js** to build a simple RESTful API with CRUD functionality. The project showcases skills in database management, routing, and deploying applications.

## Features

- **Create** a new book
- **Read** all books
- **Update** book information
- **Delete** a book by ID

## Prerequisites

To run this project locally, you'll need the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Alternatively, you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-hosted MongoDB)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Nathy-tech/books-collection-stage2.git
cd books-collection-api 
```

### 2. Install dependencies
Run the following command to install the necessary packages:

```bash
Copy code
npm install
```
### 3. Set up MongoDB
If you're using MongoDB Atlas, follow these steps to get the MongoDB URI:

Log in to your MongoDB Atlas account.
Create a new project and a new cluster.
Create a new database user and get your connection string.
Replace <password> and <dbname> with your actual password and database name.
For local MongoDB (if you prefer using MongoDB locally), you can install it on your system and replace the connection URI in the .env file as:

env
```
Copy code

MONGO_URI=mongodb://localhost:27017/booksCollection
```
### 4. Create a .env file
In the root directory of your project, create a .env file to store your environment variables. Here's an example .env file:

```env
Copy code

MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster0.mongodb.net/<your_db_name>?retryWrites=true&w=majority
PORT=5000
```
### 5. Run the application
Start the server with:

```bash
Copy code
npm start
Your server should be running at http://localhost:5000.
```

### 6. API Routes
GET /api/books - Retrieve all books
POST /api/books - Add a new book
PUT /api/books/:id - Update a book by ID
DELETE /api/books/:id - Delete a book by ID
### 7. Test with Postman or Browser
Use Postman or your browser to test the endpoints.
When you use POST or PUT, make sure to send the correct data in the body (in JSON format).
Example API requests:
Add a Book (POST)
URL: http://localhost:5000/api/books
Body (JSON):
```json
Copy code
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "publishedYear": 1925
}
```
Get All Books (GET)
URL: http://localhost:5000/api/books
Update a Book (PUT)
URL: http://localhost:5000/api/books/:id
Body (JSON):
```json
Copy code
{
  "title": "Updated Title",
  "author": "Updated Author",
  "isbn": "Updated ISBN",
  "publishedYear": 2022
}
```
Delete a Book (DELETE)
URL: http://localhost:5000/api/books/:id
Deployment
The application is hosted on Render for easy access.

### Check out the live API here: https://books-collection-stage2.onrender.com/api/books
