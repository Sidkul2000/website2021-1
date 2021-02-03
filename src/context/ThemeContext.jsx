import React, { useEffect, useState, useContext, createContext } from 'react'

const themeColors = {
    light : {
        background : '#FFFFFF',
        primary : '#1B1B1B'
    },
    dark : {
        background : '#252525',
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