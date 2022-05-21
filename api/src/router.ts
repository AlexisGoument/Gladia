import express from 'express';
import healthController from './controllers/healthController';
import apiController from './controllers/apiController';

const router = express.Router();

router.use('/api', apiController);
router.use('/', healthController);

export default router;