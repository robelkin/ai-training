import { PrismaClient, TaskStatus, ExampleTask, TaskPriority, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Finds multiple tasks based on optional status filter.
 * @param status - Optional status to filter tasks by.
 * @returns A promise that resolves to an array of ExampleTask objects.
 */
export const findTasks = async (status?: TaskStatus): Promise<ExampleTask[]> => {
  return prisma.exampleTask.findMany({
    where: {
      status: status, // If status is undefined, this condition is ignored
    },
    orderBy: {
      createdAt: 'asc', // Default sort order
    },
  });
};

/**
 * Finds a single task by its ID.
 * @param id - The UUID of the task to find.
 * @returns A promise that resolves to the ExampleTask object or null if not found.
 */
export const findTaskById = async (id: string): Promise<ExampleTask | null> => {
  return prisma.exampleTask.findUnique({
    where: {
      id: id,
    },
  });
};

/**
 * Creates a new task.
 * @param data - The data for the new task. Requires 'name'. Status/priority default if not provided.
 * @returns A promise that resolves to the newly created ExampleTask object.
 */
export const createTask = async (
  data: Prisma.ExampleTaskCreateInput
): Promise<ExampleTask> => {
  return prisma.exampleTask.create({
    data: {
      ...data,
      // Ensure defaults if not provided, though schema might handle this
      status: data.status || TaskStatus.UPCOMING,
      priority: data.priority || TaskPriority.MEDIUM,
    },
  });
};

/**
 * Updates an existing task by its ID.
 * @param id - The UUID of the task to update.
 * @param data - The data to update the task with.
 * @returns A promise that resolves to the updated ExampleTask object.
 * @throws Prisma.PrismaClientKnownRequestError if the task with the given ID is not found (P2025).
 */
export const updateTask = async (
  id: string,
  data: Prisma.ExampleTaskUpdateInput
): Promise<ExampleTask> => {
  return prisma.exampleTask.update({
    where: {
      id: id,
    },
    data: data,
  });
};

/**
 * Deletes a task by its ID.
 * @param id - The UUID of the task to delete.
 * @returns A promise that resolves to the deleted ExampleTask object.
 * @throws Prisma.PrismaClientKnownRequestError if the task with the given ID is not found (P2025).
 */
export const deleteTask = async (id: string): Promise<ExampleTask> => {
  return prisma.exampleTask.delete({
    where: {
      id: id,
    },
  });
};

// We will add create, update, delete functions later 