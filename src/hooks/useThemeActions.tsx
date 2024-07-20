import { setTheme } from "../state/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "./store"


export default function useThemeContext () {
    const theme = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch()

    const toggleTheme = ()=> {
        dispatch(setTheme())
    }

    return {theme, toggleTheme}
}
