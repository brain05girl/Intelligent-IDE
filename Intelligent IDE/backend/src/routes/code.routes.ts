import { Router } from 'express';
import { codeCompletion, analyzeBugs, generateTests } from '../controllers/code.controller';
import { validateCodeRequest } from '../middleware/validation.middleware';

const router = Router();

// Code completion endpoint
router.post('/complete', validateCodeRequest, codeCompletion);

// Bug analysis endpoint
router.post('/analyze', validateCodeRequest, analyzeBugs);

// Test generation endpoint
router.post('/test', validateCodeRequest, generateTests);

export default router; 