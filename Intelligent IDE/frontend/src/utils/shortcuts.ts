import { useEffect } from 'react';

type ShortcutHandler = () => void;

interface Shortcut {
    key: string;
    ctrlKey?: boolean;
    handler: ShortcutHandler;
}

export const useKeyboardShortcuts = (shortcuts: Shortcut[]) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            shortcuts.forEach(shortcut => {
                if (event.key === shortcut.key && 
                    (!shortcut.ctrlKey || (shortcut.ctrlKey && event.ctrlKey))) {
                    event.preventDefault();
                    shortcut.handler();
                }
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [shortcuts]);
}; 