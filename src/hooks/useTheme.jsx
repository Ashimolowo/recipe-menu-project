import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(context === undefined) {
        throw new Error("Context can only be used within themeContext provider")
    }

    return context
}