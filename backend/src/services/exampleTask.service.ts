import { TaskStatus, ExampleTask, Prisma, TaskPriority } from '@prisma/client';
import * as TaskRepository from '../repositories/exampleTask.repository';

/**
 * Gets all tasks, optionally filtered by status.
 * @param status - Optional status to filter tasks by.
 * @returns A promise that resolves to an array of ExampleTask objects.
 */
export const getAllTasks = async (
  status?: TaskStatus
): Promise<ExampleTask[]> => {
  // Add any business logic here if needed in the future
  return TaskRepository.findTasks(status);
};

/**
 * Gets a single task by its ID.
 * @param id - The UUID of the task.
 * @returns A promise that resolves to the ExampleTask object or null if not found.
 */
export const getTaskById = async (id: string): Promise<ExampleTask | null> => {
  // Add any business logic here if needed in the future
  return TaskRepository.findTaskById(id);
};

/**
 * Creates a new task.
 * @param data - The data for the new task (requires 'name').
 * @returns A promise that resolves to the newly created ExampleTask object.
 */
export const createTask = async (
  // Use Prisma.ExampleTaskCreateInput to match repository expectations
  data: Prisma.ExampleTaskCreateInput
): Promise<ExampleTask> => {
  // Future: Add validation or other business logic here
  return TaskRepository.createTask(data);
};

/**
 * Updates an existing task.
 * @param id - The UUID of the task to update.
 * @param data - The data to update the task with.
 * @returns A promise that resolves to the updated ExampleTask object.
 */
export const updateTask = async (
  id: string,
  // Use Prisma.ExampleTaskUpdateInput
  data: Prisma.ExampleTaskUpdateInput 
): Promise<ExampleTask | null> => { // Return null if not found potentially
  // Future: Add validation or other business logic here (e.g., check existence first)
  // For now, repository handles not found error (throws P2025)
  return TaskRepository.updateTask(id, data); 
};

/**
 * Deletes a task by its ID.
 * @param id - The UUID of the task to delete.
 * @returns A promise that resolves to the deleted ExampleTask object.
 */
export const deleteTask = async (id: string): Promise<ExampleTask | null> => { // Return null if not found potentially
  // Future: Add validation or other business logic here (e.g., check existence first)
  // For now, repository handles not found error (throws P2025)
  return TaskRepository.deleteTask(id);
};

// We will add create, update, delete service functions later 