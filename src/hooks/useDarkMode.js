import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
    const [someValue, setSomevalue] = useLocalStorage(key);

    useEffect(() => {
        let body = document.querySelector('body');

        someValue ? body.classList.add('dark-mode') 
        : body.classList.remove('dark-mode')
        
    }, [someValue])

    return [someValue, setSomevalue]
}