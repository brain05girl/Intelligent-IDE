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
exports.MockService = void 0;
const openai_1 = require("openai");
class MockService {
    constructor() {
        const configuration = new openai_1.Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.openai = new openai_1.OpenAIApi(configuration);
    }
    generateResponse(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const completion = yield this.openai.createCompletion({
                    model: "gpt-3.5-turbo-instruct",
                    prompt: prompt,
                    max_tokens: 1000,
                    temperature: 0.7,
                });
                return completion.data.choices[0].text || 'No response generated';
            }
            catch (error) {
                console.error('Error generating OpenAI response:', error);
                throw new Error('Failed to generate response');
            }
        });
    }
    // Replace hardcoded responses with dynamic OpenAI calls
    getMockData(type, params) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (type) {
                case 'product':
                    return this.generateProductData(params);
                case 'user':
                    return this.generateUserData(params);
                // ... other cases ...
                default:
                    throw new Error('Invalid mock data type');
            }
        });
    }
    generateProductData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const prompt = `Generate a realistic product with the following attributes: ${JSON.stringify(params)}. 
                       Return it as a JSON object with fields: name, price, description, category`;
            const response = yield this.generateResponse(prompt);
            return JSON.parse(response);
        });
    }
    generateUserData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const prompt = `Generate a realistic user profile with the following parameters: ${JSON.stringify(params)}. 
                       Return it as a JSON object with fields: name, email, role, preferences`;
            const response = yield this.generateResponse(prompt);
            return JSON.parse(response);
        });
    }
    getCodeCompletion(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            // Simulate API delay
            yield new Promise(resolve => setTimeout(resolve, 1000));
            if (language === 'python') {
                return `${code}
    # Completed code
    result = a + b
    return result`;
            }
            if (language === 'javascript') {
                return `${code}
    // Completed code
    const result = a + b;
    return result;`;
            }
            return `${code}\n    // Code completion for ${language}`;
        });
    }
    analyzeBugs(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            return `Bug Analysis Results:
1. Potential Issues:
   - Missing input validation
   - No error handling
2. Suggestions:
   - Add type checking for inputs
   - Add try-catch block
   - Add documentation`;
        });
    }
    generateTests(code, language) {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
            if (language === 'python') {
                return `import unittest

class TestSum(unittest.TestCase):
    def test_sum_positive(self):
        self.assertEqual(sum(2, 3), 5)
        
    def test_sum_negative(self):
        self.assertEqual(sum(-1, -1), -2)
        
    def test_sum_zero(self):
        self.assertEqual(sum(0, 0), 0)

if __name__ == '__main__':
    unittest.main()`;
            }
            return `// Test cases for ${language}
describe('Sum function', () => {
    test('adds positive numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
        expect(sum(-1, -1)).toBe(-2);
    });
    
    test('adds zeros', () => {
        expect(sum(0, 0)).toBe(0);
    });
});`;
        });
    }
}
exports.MockService = MockService;
