import { body, param, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { TaskStatus, TaskPriority } from '@prisma/client';

// Validation rules for creating a task
export const createTaskValidationRules = [
  body('name').notEmpty().withMessage('Task name is required').trim().escape(),
  body('description').optional().trim().escape(),
  body('status')
    .optional()
    .isIn(Object.values(TaskStatus))
    .withMessage('Invalid task status'),
  body('priority')
    .optional()
    .isIn(Object.values(TaskPriority))
    .withMessage('Invalid task priority'),
];

// Validation rules for updating a task
export const updateTaskValidationRules = [
  // ID validation is usually handled in the route/controller, but can be added here if needed
  // param('id').isUUID().withMessage('Invalid task ID format'), 
  body('name').optional().notEmpty().withMessage('Task name cannot be empty').trim().escape(),
  body('description').optional({ checkFalsy: true }).trim().escape(), // Allow empty string
  body('status')
    .optional()
    .isIn(Object.values(TaskStatus))
    .withMessage('Invalid task status'),
  body('priority')
    .optional()
    .isIn(Object.values(TaskPriority))
    .withMessage('Invalid task priority'),
];

// Optional: Validation for just the ID parameter if needed separately
export const taskIdValidationRules = [
    param('id').isUUID().withMessage('Invalid task ID format'),
];

/**
 * Middleware to handle validation errors from express-validator.
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // Format errors for a more helpful response
  const extractedErrors = errors.array().map(err => ({ [err.type === 'field' ? err.path : 'general']: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
}; 