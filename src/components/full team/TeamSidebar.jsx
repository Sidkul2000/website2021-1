import React, { Fragment, useEffect, useState } from 'react'
import { Code, Home, Bell,DollarSign, Users, Moon, Sun, DivideCircle, ArrowUp } from 'react-feather'
import { useTheme } from '../../context/ThemeContext'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import './teamSidebar.css'
import { isElementInViewport } from '../../utils'

const menuList = [
    {
        icon: <Code className="menu-icon"/>
    },
    {
        icon: <Code className="menu-icon"/>
    },
    {
        icon: <Bell className="menu-icon"/>
    },
    {
        icon: <Users className="menu-icon"/>
    },
    {
        icon: <DollarSign className="menu-icon"/>
    },
]

const Sidebar = ({
    props
}) => {
    
    
    const { theme , setTheme } = useTheme()
    const [activePage, setActivePage] = useState(0)


    const handleThemeChange = () => theme === 'dark' ? setTheme('light') : setTheme('dark')
  

    const pages = ['landing', 'about', 'team-leaders', 'activities']

    // runs when we scroll, checks if div is in viewport
    const handleScroll = () => {
       
        pages.forEach((page, index) => {
        
            let pageClass = `${page}-container`
            let element = document.querySelector(`.${pageClass}`)
            
            if(isElementInViewport(element)) {
                setActivePage(index)
            }
        })

    }

    const toDisplayGoUp = () => window.pageYOffset > window.innerHeight ? true : false

    // Scroll active section into view on menu item click
    const handleMenuClick = handleID => {
        
        let activeSection = document.querySelector(`.${pages[handleID]}-container`) 
        activeSection.scrollIntoView({behavior: 'smooth'})

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

        {toDisplayGoUp() ? 
            <div className="go-up" onClick={() => window.scroll({top:0, left:0, behavior:'smooth'})}>
                <ArrowUp className="primary" size={20}/>
            </div>
            : null 
        }

        </Fragment>
    )
}

export default Sidebar