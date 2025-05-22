# AI-Assisted Development Monorepo

This project is a monorepo containing a backend and frontend application, set up for AI-assisted development.

## Quick Start

1.  **Install Dependencies:**
    Navigate to the root directory of the project and run:
    ```bash
    npm install
    ```

2.  **Set Up Database:**
    Navigate to the backend directory and run the initial database migration:
    ```bash
    cd backend
    # Apply schema changes to the database
    npx prisma migrate dev --name init 
    # Populate the database with example data
    npx prisma db seed 
    cd .. 
    ```
    *Note: If you encounter issues, ensure you have SQLite installed or adjust the Prisma schema (`backend/prisma/schema.prisma`) for your preferred database.*

3.  **Run the Development Servers:**
    In the root directory, start both the frontend and backend servers with:
    ```bash
    npm run dev
    ```
    This command will launch both servers concurrently. The backend will typically run on `http://localhost:5001` and the frontend on `http://localhost:5000` (or the next available ports, as configured).

You should now be able to access the frontend application in your browser and interact with the backend API. 