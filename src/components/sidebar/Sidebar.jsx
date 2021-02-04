import React from 'react'
import { Box, Home, TrendingUp, Users } from 'react-feather'
import { useTheme } from '../../context/ThemeContext'

import './sidebar.css'

const menuList = [
    {
        icon: <Home className="menu-icon"/>
    },
    {
        icon: <Box className="menu-icon"/>
    },
    {
        icon: <Users className="menu-icon"/>
    },
    {
        icon: <TrendingUp className="menu-icon"/>
    },
]

const Sidebar = ({
    props
}) => {
    
    const { theme , setTheme } = useTheme()

    return (
        <div className="sidebar-container">
        
            <div className="app-logo-container">

            </div>

            <div className="menu-container">
                {
                    menuList.map(item => {
                        return (
                            <div className="menu-option">
                                {item.icon}
                                
                            </div>
                        )
                    })
                }
            </div>

            <div className="app-logo-container">
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
                {theme}
            </div>

        
        </div>
    )
}

export default Sidebar