
export const getItemFromLocalStorage = (key: string) => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.error(`Error parsing localStorage item "${key}":`, error);
        return undefined;
    }
};

export const setItemInLocalStorage = (value: unknown, key: string) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting localStorage item "${key}":`, error);
    }
};


export const removeItemFromLocalStorage = (key: string) => {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing localStorage item "${key}":`, error);
    }
};