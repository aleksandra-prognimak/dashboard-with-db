import { Router } from 'express';
import { getData } from '../controllers/data.js';

const router = new Router();

router.get('/data', getData);

export default router;
