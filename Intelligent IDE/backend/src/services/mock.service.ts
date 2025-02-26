// This File include mock API for testing the application







// import { Configuration, OpenAIApi } from 'openai';

// export class MockService {
//     private openai: OpenAIApi;

//     constructor() {
//         const configuration = new Configuration({
//             apiKey: process.env.OPENAI_API_KEY,
//         });
//         this.openai = new OpenAIApi(configuration);
//     }

//     async generateResponse(prompt: string): Promise<string> {
//         try {
//             const completion = await this.openai.createCompletion({
//                 model: "gpt-3.5-turbo-instruct",
//                 prompt: prompt,
//                 max_tokens: 1000,
//                 temperature: 0.7,
//             });

//             return completion.data.choices[0].text || 'No response generated';
//         } catch (error) {
//             console.error('Error generating OpenAI response:', error);
//             throw new Error('Failed to generate response');
//         }
//     }

//     // Replace hardcoded responses with dynamic OpenAI calls
//     async getMockData(type: string, params: any): Promise<any> {
//         switch (type) {
//             case 'product':
//                 return this.generateProductData(params);
//             case 'user':
//                 return this.generateUserData(params);
//             // ... other cases ...
//             default:
//                 throw new Error('Invalid mock data type');
//         }
//     }

//     private async generateProductData(params: any): Promise<any> {
//         const prompt = `Generate a realistic product with the following attributes: ${JSON.stringify(params)}. 
//                        Return it as a JSON object with fields: name, price, description, category`;
        
//         const response = await this.generateResponse(prompt);
//         return JSON.parse(response);
//     }

//     private async generateUserData(params: any): Promise<any> {
//         const prompt = `Generate a realistic user profile with the following parameters: ${JSON.stringify(params)}. 
//                        Return it as a JSON object with fields: name, email, role, preferences`;
        
//         const response = await this.generateResponse(prompt);
//         return JSON.parse(response);
//     }

//     async getCodeCompletion(code: string, language: string) {
//         // Simulate API delay
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         if (language === 'python') {
//             return `${code}
//     # Completed code
//     result = a + b
//     return result`;
//         }
//         if (language === 'javascript') {
//             return `${code}
//     // Completed code
//     const result = a + b;
//     return result;`;
//         }
//         return `${code}\n    // Code completion for ${language}`;
//     },

//     async analyzeBugs(code: string, language: string) {
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         return `Bug Analysis Results:
// 1. Potential Issues:
//    - Missing input validation
//    - No error handling
// 2. Suggestions:
//    - Add type checking for inputs
//    - Add try-catch block
//    - Add documentation`;
//     },

//     async generateTests(code: string, language: string) {
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         if (language === 'python') {
//             return `import unittest

// class TestSum(unittest.TestCase):
//     def test_sum_positive(self):
//         self.assertEqual(sum(2, 3), 5)
        
//     def test_sum_negative(self):
//         self.assertEqual(sum(-1, -1), -2)
        
//     def test_sum_zero(self):
//         self.assertEqual(sum(0, 0), 0)

// if __name__ == '__main__':
//     unittest.main()`;
//         }

//         return `// Test cases for ${language}
// describe('Sum function', () => {
//     test('adds positive numbers', () => {
//         expect(sum(2, 3)).toBe(5);
//     });
    
//     test('adds negative numbers', () => {
//         expect(sum(-1, -1)).toBe(-2);
//     });
    
//     test('adds zeros', () => {
//         expect(sum(0, 0)).toBe(0);
//     });
// });`;
//     }
// } 