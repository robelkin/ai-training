import { Router, RequestHandler } from 'express';
import {
  handleGetAllTasks,
  handleGetTaskById,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
} from '../controllers/exampleTask.controller';
import { asyncHandler } from '../utils/asyncHandler';
import { 
  createTaskValidationRules, 
  updateTaskValidationRules, 
  taskIdValidationRules,
  validate 
} from '../middleware/exampleTask.validator';

const router = Router();

// Define routes for Example Tasks

// GET /api/examples/tasks
router.get('/', asyncHandler(handleGetAllTasks));

// GET /api/examples/tasks/:id
router.get(
  '/:id', 
  taskIdValidationRules as RequestHandler[],
  validate as RequestHandler,
  asyncHandler(handleGetTaskById)
);

// POST /api/examples/tasks
router.post(
  '/', 
  createTaskValidationRules as RequestHandler[],
  validate as RequestHandler,
  asyncHandler(handleCreateTask)
);

// PUT /api/examples/tasks/:id
router.put(
  '/:id',
  taskIdValidationRules as RequestHandler[],
  updateTaskValidationRules as RequestHandler[],
  validate as RequestHandler,
  asyncHandler(handleUpdateTask)
);

// DELETE /api/examples/tasks/:id
router.delete(
  '/:id',
  taskIdValidationRules as RequestHandler[],
  validate as RequestHandler,
  asyncHandler(handleDeleteTask)
);

export default router; 