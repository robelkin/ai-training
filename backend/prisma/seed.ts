import { PrismaClient, TaskPriority, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

const seedTasks = [
  // Upcoming Tasks (from todoTasks)
  {
    name: "Improve email marketing strategy",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg", // Use generic path
    dueDate: new Date("2024-08-01T00:00:00Z"), // Use ISO format or Date object
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.UPCOMING,
  },
  {
    name: "Develop new product video",
    assignedToName: "Carl Jenkins",
    assignedToAvatar: "/assets/img/avatars/avatar-2.jpg",
    dueDate: new Date("2024-07-15T00:00:00Z"),
    priority: TaskPriority.HIGH,
    status: TaskStatus.UPCOMING,
  },
  {
    name: "Conduct user interviews for new feature",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-06-20T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.UPCOMING,
  },
  // In Progress Tasks
  {
    name: "Implement new analytics tracking",
    assignedToName: "Carl Jenkins",
    assignedToAvatar: "/assets/img/avatars/avatar-2.jpg",
    dueDate: new Date("2024-07-01T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.IN_PROGRESS,
  },
  {
    name: "Design new marketing campaign",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-08-15T00:00:00Z"),
    priority: TaskPriority.HIGH,
    status: TaskStatus.IN_PROGRESS,
  },
  {
    name: "Conduct A/B testing on landing page",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-06-30T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.IN_PROGRESS,
  },
  // Completed Tasks
  {
    name: "Optimize website performance",
    assignedToName: "Bertha Martin",
    assignedToAvatar: "/assets/img/avatars/avatar-3.jpg",
    dueDate: new Date("2024-06-15T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.COMPLETED,
  },
  {
    name: "Develop mobile app prototype",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-08-10T00:00:00Z"),
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.COMPLETED,
  },
  {
    name: "Conduct user research interviews",
    assignedToName: "Ashley Briggs",
    assignedToAvatar: "/assets/img/avatars/avatar-5.jpg",
    dueDate: new Date("2024-07-20T00:00:00Z"),
    priority: TaskPriority.LOW,
    status: TaskStatus.COMPLETED,
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // Clear existing data
  console.log(`Deleting existing tasks...`);
  await prisma.exampleTask.deleteMany({});
  console.log(`Existing tasks deleted.`);

  // Create new tasks
  console.log(`Creating seed tasks...`);
  const result = await prisma.exampleTask.createMany({
    data: seedTasks,
  });
  console.log(`Created ${result.count} tasks.`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 