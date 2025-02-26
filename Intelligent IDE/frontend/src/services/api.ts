import axios from 'axios';
import { cacheService } from './cache.service';

const API_BASE_URL = 'http://localhost:3001/api';

export const codeService = {
  complete: async (code: string, language: string) => {
    const cacheKey = cacheService.createKey('complete', `${language}-${code}`);
    const cachedResult = cacheService.get(cacheKey);
    
    if (cachedResult) return cachedResult;

    const response = await axios.post(`${API_BASE_URL}/code/complete`, { code, language });
    cacheService.set(cacheKey, response.data); 
    return response.data;
  },
  
  analyze: async (code: string) => {
    const cacheKey = cacheService.createKey('analyze', code);
    const cachedResult = cacheService.get(cacheKey);
    
    if (cachedResult) return cachedResult;

    const response = await axios.post(`${API_BASE_URL}/code/analyze`, { code });
    cacheService.set(cacheKey, response.data);
    return response.data;
  },
  
  generateTests: async (code: string) => {
    const cacheKey = cacheService.createKey('test', code);
    const cachedResult = cacheService.get(cacheKey);
    
    if (cachedResult) return cachedResult;

    const response = await axios.post(`${API_BASE_URL}/code/test`, { code });
    cacheService.set(cacheKey, response.data);
    return response.data;
  }
}; 