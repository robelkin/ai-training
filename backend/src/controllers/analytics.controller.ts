import { Request, Response } from 'express';
import * as AnalyticsService from './../services/analytics.service';

export const handleGetMonthlyAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsService.getMonthlyAnalytics();
    res.status(200).json(data);
  } catch (error) {
    // Check if the error is an instance of Error to safely access the message property
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: 'Error fetching monthly analytics', error: errorMessage });
  }
}; 