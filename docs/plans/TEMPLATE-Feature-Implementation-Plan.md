# TEMPLATE: [Your Feature Name] Implementation Plan

<!-- 
Instructions:
1. Rename this file: Replace TEMPLATE with your specific feature name (e.g., 02-User-Preferences-Feature.md).
2. Replace Placeholders: Search and replace all bracketed placeholders like `[Your Feature Name]`, `[ModelName]`, `[ServiceName]`, `[UIComponentPath]`, `[api-route-prefix]`, `[relevant-model]`, `[specific-action]`, etc., with the actual names relevant to your feature.
3. Customize Checklist: Add, remove, or modify checklist items based on the specific requirements of your feature. Not all phases or steps may be necessary.
4. Fill in Details: Add more specific details to each step as you understand the requirements better.
-->

## Overview
This plan outlines the steps to implement the new `[Your Feature Name]` feature within the application. This feature will enable `[brief description of what the feature does and its main benefit]`.

## Goals
- [ ] `[Specific Goal 1 - e.g., Define and manage [Data Type] at the [Relevant Context] level]`
- [ ] `[Specific Goal 2 - e.g., Allow users to view [Data Type] in the [Relevant UI Section]]`
- [ ] `[Specific Goal 3 - e.g., Enable users to input and save [Specific Data] for [Relevant Context]]`
- [ ] `[Specific Goal 4 - e.g., Integrate data capture smoothly into the existing [Workflow Name] workflow]`
- [ ] `[Specific Goal 5 - e.g., Ensure data persistence and retrieval]`
- [ ] *Add more specific goals as needed*

## Implementation Checklist

### Phase 1: Database Schema & Setup (If applicable)
- [ ] Define `[ModelName1]` model in `prisma.schema` for `[purpose of model]`.
- [ ] Define `[ModelName2]` model in `prisma.schema` for `[purpose of model]`.
- [ ] Add relations between new models and existing models (`[ExistingModel1]`, `[ExistingModel2]`).
- [ ] Consider adding relevant Enums (e.g., `[EnumName]Status`, `[EnumName]Type`).
```prisma
// Example Prisma Schema Snippet (optional)
// model [ModelName1] {
//   id        String   @id @default(cuid())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   name      String
//   // ... other fields
//   [existingModel1]   [ExistingModel1]? @relation(fields: [[existingModel1Id]], references: [id])
//   [existingModel1Id] String?
// }
```
- [ ] Run `npx prisma migrate dev --name add_[feature_name]_models` to apply changes.
- [ ] Run `npx prisma generate` to update the Prisma client.
- [ ] Consider if a seed script update in `backend/prisma/seed.ts` is needed for initial data.

### Phase 2: Backend API - Core Logic & Data Management
- [ ] **Repository:** Create/update repository (`[FeatureName].repository.ts` or existing) with functions for:
    - [ ] `find[ModelName]s` (or relevant query function).
    - [ ] `find[ModelName]ById`.
    - [ ] `create[ModelName]`.
    - [ ] `update[ModelName]`.
    - [ ] `delete[ModelName]`.
- [ ] **Service:** Create/update service (`[FeatureName].service.ts` or existing `[RelevantDomain]Service`) to handle business logic:
    - [ ] Function to get `[Data Type]` (potentially handling creation if not exists).
    - [ ] Function to create/update `[Data Type]`.
    - [ ] Function to delete `[Data Type]`.
    - [ ] *Add other business logic functions as needed.*
```typescript
// Example Service Snippet (optional)
// async function get[DataType]ForUser(userId: string, resourceId: string): Promise<[ModelName] | null> {
//   // ... check permissions ...
//   const data = await db.[modelName].findUnique({ where: { id: resourceId } });
//   // ... potentially enrich data ...
//   return data;
// }
```
- [ ] **Controller:** Create/update controller (`[FeatureName].controller.ts` or existing) for handling API requests.
    - [ ] `handleGet[Data Type]`.
    - [ ] `handleCreate[Data Type]`.
    - [ ] `handleUpdate[Data Type]`.
    - [ ] `handleDelete[Data Type]`.
- [ ] **Routes:** Define API routes in `[featureName].routes.ts` and integrate into `backend/src/server.ts` (likely under `/api/[api-route-prefix]`):
    - [ ] `GET /api/[api-route-prefix]/`
    - [ ] `GET /api/[api-route-prefix]/:id`
    - [ ] `POST /api/[api-route-prefix]/`
    - [ ] `PUT /api/[api-route-prefix]/:id`
    - [ ] `DELETE /api/[api-route-prefix]/:id`
    - *Adjust routes based on requirements (e.g., nested resources).*
```typescript
// Example Route Definition Snippet (optional)
// import { Router } from 'express';
// import { handleGet[DataType], handleCreate[DataType] } from './[featureName].controller';
// import { validateCreate[DataType] } from './[featureName].validation';
// import { checkAuth } from '../middleware/auth'; // Example middleware
//
// const router = Router();
//
// router.get('/', checkAuth, handleGet[DataType]);
// router.post('/', checkAuth, validateCreate[DataType], handleCreate[DataType]);
// // ... other routes
//
// export default router;
```
- [ ] **Validation:** Add input validation (e.g., using `express-validator`) for `POST`/`PUT` requests.
```typescript
// Example Validation Snippet (optional)
// import { body } from 'express-validator';
//
// export const validateCreate[DataType] = [
//   body('name').notEmpty().withMessage('Name is required').isString(),
//   body('score').optional().isInt({ min: 1, max: 10 }).withMessage('Score must be between 1 and 10'),
//   // ... other validation rules
// ];
```
- [ ] **Permissions:** Ensure appropriate authorization checks are implemented (e.g., using middleware).
- [ ] **Testing:** Add basic unit/integration tests for new service methods and API endpoints.

### Phase 3: Frontend UI - Displaying Data & User Interaction
- [ ] **Identify Component(s):** Locate or create the React component(s) responsible for `[displaying/managing the feature's UI]` (likely within `frontend/src/pages/[relevant-path]/` or `frontend/src/components/[relevant-path]/`).
- [ ] **Fetch Data:** Call the relevant `GET` endpoint(s) from Phase 2 when the component mounts or data is needed.
- [ ] **Display Data:** Render the fetched data appropriately.
```tsx
// Example Component Snippet (optional)
// import React, { useState, useEffect } from 'react';
// import apiClient from '../utils/apiClient'; // Example API client
//
// const [FeatureName]Component: React.FC<{ id: string }> = ({ id }) => {
//   const [data, setData] = useState<[DataType] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await apiClient.get(`/api/[api-route-prefix]/${id}`);
//         setData(response.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to load data.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [id]);
//
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!data) return <div>No data found.</div>;
//
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       {/* ... render other data fields ... */}
//       <button onClick={() => {/* Handle Edit */}}>Edit</button>
//       <button onClick={() => {/* Handle Delete */}}>Delete</button>
//     </div>
//   );
// };
//
// export default [FeatureName]Component;
```
- [ ] **User Actions:** Implement UI elements (buttons, forms, modals) for:
    - [ ] Creating new `[Data Type]`.
    - [ ] Editing existing `[Data Type]`.
    - [ ] Deleting `[Data Type]`.
    - [ ] Performing `[specific-action]` related to the feature.
- [ ] **API Integration:** Connect UI actions to the corresponding backend API endpoints (`POST`, `PUT`, `DELETE`) created in Phase 2.
```typescript
// Example API Integration Snippet (optional)
// const handleSave = async (updatedData: Partial<[DataType]>) => {
//   try {
//     const response = await apiClient.put(`/api/[api-route-prefix]/${id}`, updatedData);
//     setData(response.data); // Update local state
//     // Show success message
//   } catch (err) {
//     // Show error message
//     console.error(err);
//   }
// };
```
- [ ] **State Management:** Update local component state or Redux store to reflect data fetching and mutations.
- [ ] **Error Handling:** Display appropriate messages if fetching or saving data fails.
- [ ] **Routing:** Set up necessary frontend routes in `frontend/src/routes.tsx` if new pages are involved.
- [ ] **Navigation:** Add links/buttons in relevant places (e.g., sidebar in `frontend/src/components/sidebar/SidebarNav.tsx`, navigation bars) to access the new feature/UI.

### Phase 4: Integration Testing & Refinement
- [ ] **End-to-End Test 1:**
    - `[Action 1 - e.g., Create a new [relevant-model] instance]`
    - `[Action 2 - e.g., Navigate to the new feature UI]`
    - `[Action 3 - e.g., Add several [Data Type] items using the UI]`
    - `[Verification 1 - e.g., Verify items are saved correctly via API checks or UI refresh]`
    - `[Action 4 - e.g., Edit/Delete items and verify changes]`
- [ ] **End-to-End Test 2 (If applicable):**
    - `[Scenario involving interaction with other features or data]`
- [ ] **Edge Cases:** Consider potential edge cases:
    - `[Edge case 1 - e.g., What happens if related data is deleted?]`
    - `[Edge case 2 - e.g., Handling empty states or initial setup]`
- [ ] **UI/UX Review:** Ensure the new UI elements are intuitive, accessible, and fit within the existing application design and flow.

### Phase 5: Documentation
- [ ] **Backend:** Update/create documentation in `backend/docs/` covering:
    - [ ] New/updated Prisma models.
    - [ ] New/updated API endpoints (routes, request/response formats, authorization).
    - [ ] Key service logic or algorithms.
- [ ] **Frontend:** Update/create documentation in `frontend/docs/` covering:
    - [ ] New/updated UI components (purpose, props, state management).
    - [ ] User interaction flows.
    - [ ] Integration with state management (Redux slices/actions if applicable).
- [ ] **User Guide:** Add a section to the main user guide (`README.md` or dedicated guide) explaining how to use the new feature from an end-user perspective.
- [ ] **Plan Document:** Link this implementation plan document from relevant code comments or other documentation. 