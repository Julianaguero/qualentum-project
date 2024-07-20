import {  Middleware, Action } from "@reduxjs/toolkit";

import { removeItemFromLocalStorage, setItemInLocalStorage } from "../../utils/localStorageUtils";
import { type RootState } from "../store";



const localStorageKeyMap : Record<string, string> = {
    'cart/': 'userCart',
    'theme/': 'appTheme',
};

const handleStorageUpdate = (state: RootState, prefix: string) => {
    const key = localStorageKeyMap[prefix];
    const stateKey = prefix.slice(0, -1) as keyof RootState; // Remove trailing slash
    const data = state[stateKey];
    if (data) {
        // Asume que data no será siempre una matriz y solo verifica la longitud si es aplicable
        if (Array.isArray(data) && data.length > 0) {
            setItemInLocalStorage(data, key);
        } else if (!Array.isArray(data) && Object.keys(data).length > 0) {
            setItemInLocalStorage(data, key);
        } else {
            removeItemFromLocalStorage(key);
        }
    } else {
        removeItemFromLocalStorage(key);
    }
}

// función de tipo guard que verifica si una acción es de tipo Action.
const isAction = (action: unknown): action is Action => {
    return typeof action === 'object' && action !== null && 'type' in action;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const localStorageMiddleware : Middleware<{}, RootState> = store => next => (action: unknown)  => {
    if (!isAction(action)) {
        return next(action);
    }
    
    const result = next(action);
    for (const prefix in localStorageKeyMap) {
        if(typeof action.type === "string" && action.type.startsWith(prefix)) {
            const state = store.getState();
            handleStorageUpdate(state, prefix)
            break;
        }   
    }
    return result
}