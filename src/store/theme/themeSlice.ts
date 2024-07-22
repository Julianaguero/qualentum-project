import { createSlice } from "@reduxjs/toolkit";
import { ThemeProps } from "../../types";
import { getItemFromLocalStorage } from "../../utils/localStorageUtils";

type ThemeState = ThemeProps;

const initialState: ThemeState = (() => {
    const persistedState = getItemFromLocalStorage("appTheme")
    return persistedState ? persistedState : "light";
})();

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state) => {
            return state === "light" ? state = "dark" : state = "light";
        }
    }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
