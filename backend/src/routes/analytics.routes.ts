import { Router } from 'express';
import * as AnalyticsController from '../controllers/analytics.controller';

const router = Router();

// Route to get monthly analytics data
router.get('/monthly', AnalyticsController.handleGetMonthlyAnalytics);

export default router; 