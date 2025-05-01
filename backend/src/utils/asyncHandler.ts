import { Request, Response, NextFunction } from 'express';

// Define a type for async Express route handlers
type AsyncExpressFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>; // Can return any promise

/**
 * Wraps an async Express route handler to catch errors and pass them to next().
 * @param fn The async route handler function.
 * @returns A standard Express route handler.
 */
export const asyncHandler = (
  fn: AsyncExpressFn
) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}; 