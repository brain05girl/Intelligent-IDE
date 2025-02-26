const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const GroqService = {
    async getCodeCompletion(code: string, language: string) {
        try {
            if (!process.env.GROQ_API_KEY) {
                throw new Error('Groq API key is not configured');
            }

            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
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
                    temperature: 0.7,
                    max_tokens: 1500
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || '';
        } catch (error: any) {
            console.error('Groq API Error:', error);
            throw new Error(`Failed to get code completion: ${error.message}`);
        }
    },

    async analyzeBugs(code: string, language: string) {
        try {
            if (!process.env.GROQ_API_KEY) {
                throw new Error('Groq API key is not configured');
            }

            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
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
                    temperature: 0.7,
                    max_tokens: 1500
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || '';
        } catch (error: any) {
            console.error('Groq API Error:', error);
            throw new Error(`Failed to analyze code: ${error.message}`);
        }
    },

    async generateTests(code: string, language: string) {
        try {
            if (!process.env.GROQ_API_KEY) {
                throw new Error('Groq API key is not configured');
            }

            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
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
                    temperature: 0.7,
                    max_tokens: 1500
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || '';
        } catch (error: any) {
            console.error('Groq API Error:', error);
            throw new Error(`Failed to generate tests: ${error.message}`);
        }
    }
};