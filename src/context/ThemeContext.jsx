import React, { useEffect, useState, useContext, createContext } from 'react'

const themeColors = {
    light : {
        background : '#FFFFFF',
        primary : '#333333'
    },
    dark : {
        background : '#1a1a1a',
        primary : '#FFFFFF'
    },
}

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({children}) => {
    
    const [themeName, setThemeName] = useState('dark')

    useEffect(() => {
        setTheme('dark')
    }, [])

    const setTheme = themeName => {

        document.body.style.setProperty("--background",themeColors[themeName].background)
        document.body.style.setProperty("--primary",themeColors[themeName].primary)

        setThemeName(themeName)
    }

    return (
        <ThemeContext.Provider value={{theme: themeName, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);