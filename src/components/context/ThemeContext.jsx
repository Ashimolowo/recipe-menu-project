import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'CHANGE_MODE':
            return {...state, mode: action.payload}
        default: return state;
    }
}
export const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'light'
    })
    const change_color = (color) => {
        dispatch({type: 'CHANGE_COLOR', payload: color})
    }
    const change_mode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload: mode})
    }
   return (
    <ThemeContext.Provider value={{...state, change_mode, change_color }}>
        {children}
    </ThemeContext.Provider>
   )

}