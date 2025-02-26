import { Request, Response } from 'express';
import { GroqService } from '../services/groq.service';

export const codeCompletion = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Received code completion request:', req.body);
    const { code, language } = req.body;
    if (!code) {
      res.status(400).json({ error: 'Code is required' });
      return;
    }

    const completion = await GroqService.getCodeCompletion(code, language);
    console.log('Completion response:', completion);
    res.json({ completion });
  } catch (error: any) {
    console.error('Code completion error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to complete code'
    });
  }
};

export const analyzeBugs = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Received bug analysis request:', req.body);
    const { code, language } = req.body;
    if (!code) {
      res.status(400).json({ error: 'Code is required' });
      return;
    }

    const analysis = await GroqService.analyzeBugs(code, language);
    console.log('Analysis response:', analysis);
    res.json({ analysis });
  } catch (error: any) {
    console.error('Bug analysis error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to analyze code'
    });
  }
};

export const generateTests = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Received test generation request:', req.body);
    const { code, language } = req.body;
    if (!code) {
      res.status(400).json({ error: 'Code is required' });
      return;
    }

    const tests = await GroqService.generateTests(code, language);
    console.log('Tests response:', tests);
    res.json({ tests });
  } catch (error: any) {
    console.error('Test generation error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to generate tests'
    });
  }
}; 