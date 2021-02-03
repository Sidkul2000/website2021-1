import React from 'react'
import { useTheme } from '../../context/ThemeContext'

import './sidebar.css'

const Sidebar = ({
    props
}) => {
    
    const { theme , setTheme } = useTheme()

    return (
        <div className="sidebar-container">
        
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button>
        {theme}
        </div>
    )
}

export default Sidebar