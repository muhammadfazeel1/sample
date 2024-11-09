Task Management System
This is a Task Management System built with the MERN stack (MongoDB, Express, React, and Node.js). The application aims to simplify task planning and prioritization. Tasks are color-coded based on priority, allowing users to easily distinguish between high, medium, and low priority tasks.

Features
    Task Management: Create, read, update, and delete tasks.
    Priority-based Color Coding: Task colors change based on the priority level (e.g., high, medium, low).
    Validation: Middleware to validate data before creating or updating tasks.
    Consistent HTTP Status Codes: Proper handling of HTTP status codes for all routes.


Prerequisites
Node.js and npm
MongoDB (Local or Cloud instance)


Tasks for Candidates
1. Handle Missing Logic Based on Frontend API Calls
    The backend routes currently lack implementation logic for handling CRUD operations. Review the frontend API calls to understand what data is expected from each endpoint and implement the appropriate logic on the backend.

        GET /tasks: Retrieve all tasks from the database.
        POST /task/new: Add a new task based on request data.
        DELETE /task/delete/: Delete a specific task by ID.
        PUT /task/update/: Update a task’s details by ID.

2. Implement Validation Middleware for All Routes
            Implement middleware functions to validate incoming request data for each route:
            Ensure required fields are present for POST /task/new and PUT /task/update/:id requests.
            Validate data types, string lengths, and required fields like title, description, and priority.
            Return appropriate error messages and status codes for invalid data.

3. Handle HTTP Status Codes Properly
    Ensure consistent and appropriate use of HTTP status codes across all routes:
        200 OK for successful GET requests.
        201 Created for successful POST requests.
        204 No Content for successful DELETE requests.
        400 Bad Request for invalid data or missing fields.
        404 Not Found for tasks that do not exist.
        500 Internal Server Error for unexpected server errors.