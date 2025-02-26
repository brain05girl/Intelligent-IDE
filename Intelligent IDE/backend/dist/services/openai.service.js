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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIService = void 0;
const openai_1 = __importDefault(require("openai"));
const config_1 = require("../config/config");
const openai = new openai_1.default({
    apiKey: config_1.config.openAIKey,
});
exports.OpenAIService = {
    getCodeCompletion(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const completion = yield openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are a helpful coding assistant. Complete the ${language} code based on the context provided. Only respond with code, no explanations.`
                        },
                        {
                            role: "user",
                            content: `Complete this ${language} code: ${code}`
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                });
                return completion.choices[0].message.content;
            }
            catch (error) {
                console.error('OpenAI API Error:', error);
                throw new Error('Failed to get code completion');
            }
        });
    },
    analyzeBugs(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const analysis = yield openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are a code reviewer. Analyze the ${language} code for potential bugs and issues.`
                        },
                        {
                            role: "user",
                            content: `Analyze this ${language} code for bugs and suggest fixes: ${code}`
                        }
                    ],
                    max_tokens: 200,
                    temperature: 0.3,
                });
                return analysis.choices[0].message.content;
            }
            catch (error) {
                console.error('OpenAI API Error:', error);
                throw new Error('Failed to analyze code');
            }
        });
    },
    generateTests(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tests = yield openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are a test generator. Generate comprehensive unit tests for the provided ${language} code.`
                        },
                        {
                            role: "user",
                            content: `Generate unit tests for this ${language} code: ${code}`
                        }
                    ],
                    max_tokens: 300,
                    temperature: 0.5,
                });
                return tests.choices[0].message.content;
            }
            catch (error) {
                console.error('OpenAI API Error:', error);
                throw new Error('Failed to generate tests');
            }
        });
    }
};
