const express  = require('express');
const router = express.Router();

const DashboardCtrl = require('../controllers/DashboardCtrl');



router.get('/kpis',               DashboardCtrl.getKpis);
router.get('/pipeline-funnel',    DashboardCtrl.getFunnel);
router.get('/sales-trend',        DashboardCtrl.getSalesTrend);
router.get('/partner-performance',DashboardCtrl.getPartnerPerformance);
router.get('/win-loss',           DashboardCtrl.getWinLoss);
router.get('/content-summary',    DashboardCtrl.getContentSummary);
router.get('/partner-summary',    DashboardCtrl.getPartnerSummary);

module.exports = router;
