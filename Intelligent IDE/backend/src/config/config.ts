import dotenv from 'dotenv';
dotenv.config();

export const config = {
    openAIKey: process.env.OPENAI_API_KEY,
    port: process.env.PORT || 3001,
    nodeEnv: process.env.NODE_ENV || 'development',
}; 