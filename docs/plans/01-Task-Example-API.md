# Plan: Task Example API Implementation

This document outlines the phases and steps involved in creating the Task Management example application, including both frontend UI setup and backend API development.

## Phase 1: Frontend Setup (Replicating Task List UI)

- [x] Analyze original `TasksList` component (`frontend/src/pages/apps/TasksList.tsx`)
- [x] Create new directory structure (`frontend/src/pages/examples/tasks/`)
- [x] Create new component file (`frontend/src/pages/examples/tasks/ExampleTaskList.tsx`)
- [x] Copy content from `TasksList` to `ExampleTaskList` and rename component
- [x] Create new route `/examples/tasks/list` in `frontend/src/routes.tsx`
- [x] Add initial sidebar link (under "Examples" > "Example Features" dropdown)
- [x] Simplify sidebar link (remove dropdown, place "Task List" directly under "Examples")

## Phase 2: Backend Database Setup

- [x] Define Prisma schema for `ExampleTask` model and `TaskStatus`/`TaskPriority` enums
- [x] Implement Prisma schema in `backend/prisma/schema.prisma`
- [x] Create seed script `backend/prisma/seed.ts` with initial data
- [x] Configure `backend/package.json` (`prisma.seed` entry) for seeding
- [x] Run initial database migration (`npx prisma migrate dev`)
- [x] Run database seed script (`npx prisma db seed`)
- [x] Update root `README.md` with migration and seed steps
- [x] Update `docs/QUICKSTART.md` with migration and seed steps
- [x] Add `db:seed` npm script alias to `backend/package.json`

## Phase 3: Backend API Implementation (Read Operations)

- [x] Create placeholder files for Repository, Service, Controller, and Routes
- [x] Implement Repository functions (`findTasks`, `findTaskById`) in `exampleTask.repository.ts`
- [x] Implement Service functions (`getAllTasks`, `getTaskById`) in `exampleTask.service.ts`
- [x] Implement Controller functions (`handleGetAllTasks`, `handleGetTaskById`) in `exampleTask.controller.ts`
- [x] Implement `asyncHandler` utility in `backend/src/utils/asyncHandler.ts`
- [x] Implement Routes (`GET /`, `GET /:id`) using `asyncHandler` in `exampleTask.routes.ts`
- [x] Integrate `exampleTaskRoutes` into `backend/src/server.ts` under `/api/examples/tasks`

## Phase 4: Backend API Implementation (Write Operations)

- [x] Implement Repository functions (`createTask`, `updateTask`, `deleteTask`)
- [x] Implement Service functions (`createTask`, `updateTask`, `deleteTask`)
- [x] Add input validation for POST/PUT requests (e.g., using `express-validator`)
- [x] Implement Controller functions (`handleCreateTask`, `handleUpdateTask`, `handleDeleteTask`)
- [x] Implement Routes (`POST /`, `PUT /:id`, `DELETE /:id`)

## Phase 5: Frontend Integration

- [x] Refactor `ExampleTaskList.tsx` to fetch data from the `/api/examples/tasks` endpoint
- [x] Implement state management for tasks in the frontend component
- [ ] Connect frontend UI actions (e.g., 'New Task' button) to POST endpoint
- [ ] Implement functionality to update task status via PUT endpoint (mark task as complete/not complete)
- [ ] Implement functionality to delete tasks via DELETE endpoint 
- [ ] Allow for a task to be edited (removing the view button)