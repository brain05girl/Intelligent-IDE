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
exports.GroqService = void 0;
const GROQ_API_URL = 'https://api.groq.com/v1/completions';
exports.GroqService = {
    getCodeCompletion(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!process.env.GROQ_API_KEY) {
                    throw new Error('Groq API key is not configured');
                }
                const response = yield fetch(GROQ_API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: [
                            {
                                role: "system",
                                content: `You are an expert ${language} programmer. Complete the code based on the context. Only provide the code completion, no explanations.`
                            },
                            {
                                role: "user",
                                content: code
                            }
                        ],
                        model: "llama2-70b-4096",
                        temperature: 0.7,
                        max_tokens: 1500,
                        top_p: 1,
                    })
                });
                if (!response.ok) {
                    throw new Error(`Groq API error: ${response.statusText}`);
                }
                const data = yield response.json();
                return ((_b = (_a = data.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '';
            }
            catch (error) {
                console.error('Groq API Error:', error.message);
                throw new Error(`Failed to get code completion: ${error.message}`);
            }
        });
    },
    analyzeBugs(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!process.env.GROQ_API_KEY) {
                    throw new Error('Groq API key is not configured');
                }
                const response = yield fetch(GROQ_API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: [
                            {
                                role: "system",
                                content: `You are an expert code reviewer. Analyze the following ${language} code for bugs and potential improvements. Format your response with markdown.`
                            },
                            {
                                role: "user",
                                content: code
                            }
                        ],
                        model: "llama2-70b-4096",
                        temperature: 0.7,
                        max_tokens: 1500,
                        top_p: 1,
                    })
                });
                if (!response.ok) {
                    throw new Error(`Groq API error: ${response.statusText}`);
                }
                const data = yield response.json();
                return ((_b = (_a = data.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '';
            }
            catch (error) {
                console.error('Groq API Error:', error.message);
                throw new Error(`Failed to analyze code: ${error.message}`);
            }
        });
    },
    generateTests(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                if (!process.env.GROQ_API_KEY) {
                    throw new Error('Groq API key is not configured');
                }
                const response = yield fetch(GROQ_API_URL, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: [
                            {
                                role: "system",
                                content: `You are an expert in writing tests. Generate comprehensive unit tests for the following ${language} code. Only provide the test code, no explanations.`
                            },
                            {
                                role: "user",
                                content: code
                            }
                        ],
                        model: "llama2-70b-4096",
                        temperature: 0.7,
                        max_tokens: 1500,
                        top_p: 1,
                    })
                });
                if (!response.ok) {
                    throw new Error(`Groq API error: ${response.statusText}`);
                }
                const data = yield response.json();
                return ((_b = (_a = data.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) || '';
            }
            catch (error) {
                console.error('Groq API Error:', error.message);
                throw new Error(`Failed to generate tests: ${error.message}`);
            }
        });
    }
};
