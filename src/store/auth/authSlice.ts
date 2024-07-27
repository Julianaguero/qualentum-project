import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataProps } from "../../types";
import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemInLocalStorage } from "../../utils/localStorageUtils";

interface AuthState {
    userData: UserDataProps,
    authChecked: boolean,
    isLogged: boolean
}

const defaultUser: UserDataProps = {
    username: "",
    email: "",
    password: "",
    role: "notAsigned"
}

const initializeState = () => {
    const persistedState: UserDataProps | undefined = getItemFromLocalStorage("userData");
    const initialUser = {
        userData: persistedState || defaultUser,
        authChecked: !!persistedState,
        isLogged:  !!persistedState,
    }
    return initialUser
}

const initialState: AuthState = initializeState();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<UserDataProps>) => {
            state.userData = action.payload;
            state.isLogged = true;
            state.authChecked = true;
            setItemInLocalStorage(state.userData, "userData");
        },
        userLogout: (state) => {
            state.userData = defaultUser;
            state.isLogged = false;
            state.authChecked = true;
            removeItemFromLocalStorage("userData");
        }
    }
})

export const {userLogin, userLogout} = authSlice.actions;

export default authSlice.reducer;