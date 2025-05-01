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

  console.log('Seeding monthly analytics data...');
  const analyticsData = [
    { month: 1, year: 2024, sessionDuration: 10, pageViews: 5000, totalVisits: 2000 },
    { month: 2, year: 2024, sessionDuration: 11, pageViews: 4550, totalVisits: 2250 },
    { month: 3, year: 2024, sessionDuration: 9,  pageViews: 4980, totalVisits: 2400 },
    { month: 4, year: 2024, sessionDuration: 10, pageViews: 5520, totalVisits: 2750 },
    { month: 5, year: 2024, sessionDuration: 12, pageViews: 5100, totalVisits: 2500 },
    { month: 6, year: 2024, sessionDuration: 11, pageViews: 4750, totalVisits: 2800 },
    { month: 7, year: 2024, sessionDuration: 13, pageViews: 5300, totalVisits: 3100 },
    { month: 8, year: 2024, sessionDuration: 12, pageViews: 5900, totalVisits: 3500 },
    { month: 9, year: 2024, sessionDuration: 10, pageViews: 5200, totalVisits: 3000 },
    { month: 10, year: 2024, sessionDuration: 11, pageViews: 5800, totalVisits: 3300 },
    { month: 11, year: 2024, sessionDuration: 13, pageViews: 6200, totalVisits: 3800 },
    { month: 12, year: 2024, sessionDuration: 12, pageViews: 5600, totalVisits: 3500 },
  ];

  // Clear existing analytics data first to ensure consistency if the seed data changes
  console.log('Deleting existing monthly analytics data...');
  await prisma.monthlyAnalytics.deleteMany({}); 
  console.log('Existing monthly analytics data deleted.');

  console.log('Creating monthly analytics data...');
  for (const data of analyticsData) {
    await prisma.monthlyAnalytics.upsert({
      where: { month_year: { month: data.month, year: data.year } }, // Using the @@unique constraint
      update: data, // Update if exists (though we delete first)
      create: data, // Create if not exists
    });
  }
  console.log(`Monthly analytics data seeded for ${analyticsData.length} months.`);

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