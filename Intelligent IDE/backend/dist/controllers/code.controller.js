"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTests = exports.analyzeBugs = exports.codeCompletion = void 0;
const groq_service_1 = require("../services/groq.service");
const codeCompletion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, language } = req.body;
        if (!code) {
            res.status(400).json({ error: 'Code is required' });
            return;
        }
        const completion = yield groq_service_1.GroqService.getCodeCompletion(code, language);
        res.json({ completion });
    }
    catch (error) {
        console.error('Code completion error:', error);
        res.status(500).json({
            error: error.message || 'Failed to complete code',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});
exports.codeCompletion = codeCompletion;
const analyzeBugs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, language } = req.body;
        if (!code) {
            res.status(400).json({ error: 'Code is required' });
            return;
        }
        const analysis = yield groq_service_1.GroqService.analyzeBugs(code, language);
        res.json({ analysis });
    }
    catch (error) {
        console.error('Bug analysis error:', error);
        res.status(500).json({
            error: error.message || 'Failed to analyze code',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});
exports.analyzeBugs = analyzeBugs;
const generateTests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, language } = req.body;
        if (!code) {
            res.status(400).json({ error: 'Code is required' });
            return;
        }
        const tests = yield groq_service_1.GroqService.generateTests(code, language);
        res.json({ tests });
    }
    catch (error) {
        console.error('Test generation error:', error);
        res.status(500).json({
            error: error.message || 'Failed to generate tests',
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});
exports.generateTests = generateTests;
