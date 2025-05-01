import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMonthlyAnalytics = async () => {
  try {
    const analytics = await prisma.monthlyAnalytics.findMany({
      orderBy: [
        { year: 'asc' },
        { month: 'asc' },
      ],
    });
    return analytics;
  } catch (error) {
    console.error("Error fetching monthly analytics:", error);
    throw new Error('Failed to fetch monthly analytics data');
  }
}; 