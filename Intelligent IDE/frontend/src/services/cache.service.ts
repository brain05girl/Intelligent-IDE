interface CacheItem {
    data: any;
    timestamp: number;
}

class CacheService {
    private cache: Map<string, CacheItem>;
    private readonly TTL: number = 1000 * 60 * 5; // 5 minutes

    constructor() {
        this.cache = new Map();
    }

    createKey(type: string, code: string): string {
        return `${type}-${code}`;
    }

    set(key: string, data: any): void {
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    }

    get(key: string): any | null {
        const item = this.cache.get(key);
        if (!item) return null;

        if (Date.now() - item.timestamp > this.TTL) {
            this.cache.delete(key);
            return null;
        }

        return item.data;
    }

    clear(): void {
        this.cache.clear();
    }
}

export const cacheService = new CacheService(); 