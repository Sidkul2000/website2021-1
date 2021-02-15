import React, { Fragment, useEffect, useState } from 'react'
import { Code, Home, Bell,DollarSign, Users, Moon, Sun, DivideCircle, ArrowUp, Layers, Film } from 'react-feather'
import { useTheme } from '../../context/ThemeContext'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import './teamSidebar.css'
import { isElementInViewport } from '../../utils'

const menuList = [
    {
        icon: <Code className="menu-icon" color="#0085FF"/>
    },
    {
        icon: <Bell className="menu-icon" color="#FFDB00"/>
    },
    {
        icon: <DollarSign className="menu-icon" color="#7E08DA"/>
    },
    {
        icon: <Layers className="menu-icon" color="#02B93F"/>
    },
    {
        icon: <Film className="menu-icon" color="#0085FF"/>
    },
]

const Sidebar = ({
    props
}) => {
    
    
    const { theme , setTheme } = useTheme()
    const [activePage, setActivePage] = useState(0)


    const handleThemeChange = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
  

    const pages = ['Team Web and Tech', 'Notification', 'Finance', 'Event Management and Production', 'Student Coordination and Printing']

    // runs when we scroll, checks if div is in viewport
    const handleScroll = () => {
       
        pages.forEach((page, index) => {
        
            let pageClass = `team-${page}`
            let element = document.querySelector(`.${pageClass}`)
            
            if(isElementInViewport(element)) {
                setActivePage(index)
            }
        })

    }

    const toDisplayGoUp = () => window.pageYOffset > window.innerHeight ? true : false

    // Scroll active section into view on menu item click
    const handleMenuClick = handleID => {
        
       const howMuchToScroll = handleID * window.innerHeight
       window.scroll({
           top: howMuchToScroll,
           left:0,
           behavior:'smooth'
       })
    }

    console.log(toDisplayGoUp())

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])


    return (

        <Fragment>
        <div className="sidebar-container">
        
            <div className="app-logo-container">

            </div>

            <div className="menu-container">
                {
                    menuList.map((item, index) => {
                        return (
                            <div 
                                className={index === activePage ? "menu-option active-menu" : "menu-option"}
                                onClick={() => handleMenuClick(index)}
                            >
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
        </Fragment>
    )
}

export default Sidebar