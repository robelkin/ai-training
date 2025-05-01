# Project Quickstart Guide

## TL;DR (After Cloning)

1.  **Install all dependencies:**
    ```bash
    # Run from project root
    npm install
    ```
2.  **Set up the database:**
    ```bash
    # Run from project root
    npm run db:migrate:dev -w backend
    ```
3.  **Start development servers:**
    ```bash
    # Run from project root
    npm run dev
    ```

---

Welcome to the AI-Assisted Development Monorepo Template!
This guide will help you get the project up and running quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** (Check `.nvmrc` or root `package.json` `engines` field if specified for a recommended version). We recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.
*   **npm:** (Usually comes with Node.js)

## Setup Steps

1.  **Clone the Repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install Dependencies:**
    Install all dependencies for the root, backend, and frontend workspaces.
    ```bash
    npm install
    ```

3.  **Check Backend Environment (`backend/.env`):**
    *   Navigate to the `backend` directory.
    *   Verify the `.env` file exists.
    *   Ensure it contains the correct `DATABASE_URL` and `BACKEND_PORT`. Adjust the port if necessary.
        ```dotenv
        # backend/.env
        DATABASE_URL="file:./dev.db"
        BACKEND_PORT=3001
        ```

4.  **Check Frontend Environment (`frontend/.env.development` & `frontend/.env.production`):**
    *   Navigate to the `frontend` directory.
    *   Verify the `.env.development` and `.env.production` files exist.
    *   Check the development variables in `.env.development`. **Ensure all variables are prefixed with `VITE_`** to expose them to the Vite frontend. At minimum, verify the API base URL:
        ```dotenv
        # frontend/.env.development
        VITE_API_BASE_URL=http://localhost:3001/api
        
        # Verify other VITE_ variables required by the frontend template (e.g., Firebase, Auth0 keys)
        # VITE_FIREBASE_API_KEY=...
        ```
    
5.  **Create and Migrate Database:**
    Run the initial Prisma migration from the **root** directory. This will create the SQLite database file (`backend/dev.db`) and set up the tables based on the schema (`backend/prisma/schema.prisma`).
    ```bash
    npm run db:migrate:dev -w backend
    ```
    You only need to run this the first time or when the database schema changes.

## Running the Application

*   **Development Mode:**
    To start both the backend and frontend development servers concurrently (with hot-reloading), run the following command from the **root** directory:
    ```bash
    npm run dev
    ```
    *   Backend will typically run on `http://localhost:3001` (or the `BACKEND_PORT` you set).
    *   Frontend will typically run on `http://localhost:3000` (or the port set in `frontend/package.json` `dev` script) and should open automatically in your browser.

*   **Linting and Formatting:**
    To check for code style issues and format the code across the entire project, run these commands from the **root** directory:
    ```bash
    npm run lint
    npm run format
    ```

*   **Building for Production:**
    To create production-ready builds:
    ```bash
    # Build the backend (output to backend/dist/)
    npm run build -w backend
    
    # Build the frontend (output to frontend/dist/)
    npm run build -w frontend
    ```

*   **Running in Production (Example):**
    After building, you would typically start the backend server like this:
    ```bash
    npm run start -w backend
    ```
    The built frontend (`frontend/dist`) would then be served by a static file server (like Nginx or Caddy) or hosted on a platform like Vercel or Netlify, configured to proxy API requests to your running backend.

## Next Steps

Explore the `backend/src` and `frontend/src` directories to understand the project structure and start building your application! 