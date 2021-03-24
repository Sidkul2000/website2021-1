import React, { Fragment, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'react-feather'
import { teamLeadersInfo } from '../../info'
import ScrollAnimation from 'react-animate-on-scroll'

import './teamleaders.css'
import { useTheme } from '../../context/ThemeContext'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import jui_and_siddhi from '../../assets/jui_and_siddhi.svg'


const TeamLeaders = ({
    props
}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const {theme, } = useTheme()

    const increment = () => {
        if(activeIndex === 6) {
            setActiveIndex(0)
            return
        }
        setActiveIndex(activeIndex+1)
    }

    const decrement = () => {
        if(activeIndex === 0) {
            setActiveIndex(6)
            return 
        }
        setActiveIndex(activeIndex-1)
    }

    const getIndex = () => {
        switch(activeIndex) {
            case 0: return {
                0:'active-item',
                1:'r1',
                2:'r2',
                3:'r3',
                4:'l3',
                5:'l2',
                6:'l1'
            }
            case 1: return {
                0:'l1',
                1:'active-item',
                2:'r1',
                3:'r2',
                4:'r3',
                5:'l3',
                6:'l2'
            }
            case 2: return {
                0:'l2',
                1:'l1',
                2:'active-item',
                3:'r1',
                4:'r2',
                5:'r3',
                6:'l3'
            }
            case 3: return {
                0:'l3',
                1:'l2',
                2:'l1',
                3:'active-item',
                4:'r1',
                5:'r2',
                6:'r3'
            }
            case 4: return {
                0:'r3',
                1:'l3',
                2:'l2',
                3:'l1',
                4:'active-item',
                5:'r1',
                6:'r2'
            }
            case 5: return {
                0:'r2',
                1:'r3',
                2:'l3',
                3:'l2',
                4:'l1',
                5:'active-item',
                6:'r1'
            }
            case 6: return {
                0:'r1',
                1:'r2',
                2:'r3',
                3:'l3',
                4:'l2',
                5:'l1',
                6:'active-item'
            }
        }
    }

    

    return (
        <div className="team-leaders-container section-container">
            
            
            <p className="h0 primary ta-center " style={{marginTop:100}}>Meet the team</p>

            <p className="t0 mediumgrey ta-center " style={{width:'60%', margin:'20px auto'}}>The ITSA Committee consists of 46 highly talented people from the second, third and fourth years, who manage various aspects of ITSA's activities and also enrich their knowledge through it. </p>
            
            <ScrollAnimation 
                    animateIn="fadeIn"
                    offset={0}
                    delay={0}
                    animateOnce
                >
 
                    <button className="know-more-button join-itsa-button">
                        <p className="h5 white">Join the team</p>
                    </button>

            </ScrollAnimation>
           
            <p className="h2 primary ta-center" style={{marginTop: 130}}>Our Team Leaders</p>
            {/* <p className="h2 primary ta-center mediumgrey">Our Team Leaders</p> */}

           
            <div className="slider-container">

                <div onClick={decrement} className="left arrow"><ChevronLeft className="primary" /></div>
                <div onClick={increment} className="right arrow"><ChevronRight className="primary" /></div>


                {
                    teamLeadersInfo.map((item, index) => {
                        return (
                            <Fragment>
                            <div
                                className={`${getIndex()[index]} outer`}
                                style={{
                                    backgroundImage: index === 4  ? `url(${jui_and_siddhi})` :  `url(${item.image.replace('open?', 'uc?')})`
                                }}
                                onClick={() => setActiveIndex(index)}
                            >
                                
                                <div className={theme==='dark' ? "hexagon" : "hexagon lighthexagon"}></div> 
                            </div>
                            
                            </Fragment>
                        )
                    })
                }

                <ScrollAnimation 
                    animateIn="fadeIn"
                    animateOut="fadeOut"
                    offset={0}
                    duration={1.2}
                    animateOnce
                >

                    <p className="h2 primary name-leader ta-center">{teamLeadersInfo[activeIndex].title}</p>

                    <p className="h5 role-leader ta-center">{teamLeadersInfo[activeIndex].role}</p>
                    
                    <div className="socials-leaders">
                    {Object.keys(teamLeadersInfo[activeIndex].social).map(s => {
                        return (
                            s === 'instagram' ? <a href={teamLeadersInfo[activeIndex].social.instagram} target="_blank"><FaInstagram size={20} className="primary"/></a> : 
                            s === 'linkedin' ? <a href={teamLeadersInfo[activeIndex].social.linkedin} target="_blank"><FaLinkedin size={20} className="primary"/></a> : 
                            s === 'github' ? <a href={teamLeadersInfo[activeIndex].social.github} target="_blank"><FaGithub size={20} className="primary"/></a> : null 
                        )
                    })}
                    </div>

                    <p className="t0 desc-leader ta-center">{teamLeadersInfo[activeIndex].description}</p>

                    
                </ScrollAnimation>
                
                 
            


            </div>
        </div>
    )
}

export default TeamLeaders