Book Catalog API
A RESTful API for managing a book catalog with JWT-based authentication.
The API is built using Express.js for the backend, MongoDB for the database.
Supports user registration, login, and full CRUD operations on books.


Features
User registration and login with JWT authentication
Secure endpoints for creating, updating, and deleting books
Public endpoints for fetching books
Postman collection + environment provided for easy testing


Tech Stack
Node.js + Express
MongoDB + Mongoose
JWT for authentication
bcryptjs for password hashing
dotenv for environment variables


Installation
1.Clone the repository:

2.Install dependencies:
npm install

3.Create a .env file in the root directory and set your environment variables. You can use the provided .env.example as a template.


API Documentation
Retrieve Books
Get /books: Get list of all books.

Add a New Book
POST /books: Add a new book.
Request Body: { "title": "Book Title", "author": "Author Name", "publicationYear": 2018, "otherDetails": "Additional Information" }

Update Book Details
PUT /books/:id: Update details of a specific book.
Request Body: { "title": "Updated Title", "author": "Updated Author", "publicationYear": 2023, "otherDetails": "Updated Information" }

Delete Book
DELETE /books/:id: Delete a specific book.

Authentication
POST /register: Register a new user.
Request Body: { "username": "your-username", "password": "your-password" }


Environment Variables
PORT: Port on which the server will run.
Mongo_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT token generation.


License
This project is licensed under the MIT License.
