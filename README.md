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
    npx prisma migrate dev --name init
    cd .. 
    ```
    *Note: If you encounter issues, ensure you have SQLite installed or adjust the Prisma schema (`backend/prisma/schema.prisma`) for your preferred database.*

3.  **Run the Backend:**
    Navigate to the backend directory and start the development server:
    ```bash
    cd backend
    npm run dev
    ```
    The backend server should now be running, typically on `http://localhost:3000` (or the port specified in your `.env` file).

4.  **Run the Frontend:**
    In a separate terminal, navigate to the frontend directory and start the development server:
    ```bash
    cd frontend
    npm run dev
    ```
    The frontend development server should now be running, typically on `http://localhost:5173` (or the next available port).

You should now be able to access the frontend application in your browser and interact with the backend API. 