// This File include OpenA API for testing the application





// import OpenAI from 'openai';
// import { config } from '../config/config';

// const openai = new OpenAI({
//     apiKey: config.openAIKey,
// });

// export const OpenAIService = {
//     async getCodeCompletion(code: string, language: string) {
//         try {
//             const completion = await openai.chat.completions.create({
//                 model: "gpt-3.5-turbo",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `You are a helpful coding assistant. Complete the ${language} code based on the context provided. Only respond with code, no explanations.`
//                     },
//                     {
//                         role: "user",
//                         content: `Complete this ${language} code: ${code}`
//                     }
//                 ],
//                 max_tokens: 150,
//                 temperature: 0.7,
//             });

//             return completion.choices[0].message.content;
//         } catch (error) {
//             console.error('OpenAI API Error:', error);
//             throw new Error('Failed to get code completion');
//         }
//     },

//     async analyzeBugs(code: string, language: string) {
//         try {
//             const analysis = await openai.chat.completions.create({
//                 model: "gpt-3.5-turbo",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `You are a code reviewer. Analyze the ${language} code for potential bugs and issues.`
//                     },
//                     {
//                         role: "user",
//                         content: `Analyze this ${language} code for bugs and suggest fixes: ${code}`
//                     }
//                 ],
//                 max_tokens: 200,
//                 temperature: 0.3,
//             });

//             return analysis.choices[0].message.content;
//         } catch (error) {
//             console.error('OpenAI API Error:', error);
//             throw new Error('Failed to analyze code');
//         }
//     },

//     async generateTests(code: string, language: string) {
//         try {
//             const tests = await openai.chat.completions.create({
//                 model: "gpt-3.5-turbo",
//                 messages: [
//                     {
//                         role: "system",
//                         content: `You are a test generator. Generate comprehensive unit tests for the provided ${language} code.`
//                     },
//                     {
//                         role: "user",
//                         content: `Generate unit tests for this ${language} code: ${code}`
//                     }
//                 ],
//                 max_tokens: 300,
//                 temperature: 0.5,
//             });

//             return tests.choices[0].message.content;
//         } catch (error) {
//             console.error('OpenAI API Error:', error);
//             throw new Error('Failed to generate tests');
//         }
//     }
// };