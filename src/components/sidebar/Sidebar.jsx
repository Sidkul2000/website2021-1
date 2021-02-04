import React from 'react'
import { Box, Home, TrendingUp, Users, Moon, Sun } from 'react-feather'
import { useTheme } from '../../context/ThemeContext'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

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

    const handleThemeChange = () => {
        if(theme === 'dark') {
            setTheme('light')
        } else setTheme('dark')
    }

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
                <Toggle
					defaultChecked={theme === 'light'}
					icons={{ 
						checked: <Moon size={17} color="#6D6D6D" style={{position: "absolute", top: -3, transform:'rotate(90deg)', left: -2}}/>,
						unchecked: <Sun size={14} color="#FFF" style={{position: "absolute", top: -2,}}/>,
					}}
					className="toggle"
					onChange={handleThemeChange} 
				/>
            </div>

        
        </div>
    )
}

export default Sidebar