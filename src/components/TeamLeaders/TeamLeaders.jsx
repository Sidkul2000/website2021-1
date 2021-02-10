import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { teamLeadersInfo } from '../../info'
import ScrollAnimation from 'react-animate-on-scroll'

import './teamleaders.css'


const TeamLeaders = ({
    props
}) => {

    const [activeIndex, setActiveIndex] = useState(0)

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
            
            <p className="h0 primary ta-center">Our Team Leaders</p>

            

            {activeIndex}

            <div className="slider-container">

                <div onClick={decrement} className="left arrow"><ArrowLeft className="primary" /></div>
                <div onClick={increment} className="right arrow"><ArrowRight className="primary" /></div>


                {
                    teamLeadersInfo.map((item, index) => {
                        return (
                            <div
                                className={`${getIndex()[index]} outer`}
                                style={{backgroundImage:`url(${item.image})`}}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="hexagon"></div> 
                            </div>

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

                    <p className="t0 desc-leader ta-center">{teamLeadersInfo[activeIndex].description}</p>
                </ScrollAnimation>
                
                <ScrollAnimation 
                    animateIn="fadeIn"
                    offset={0}
                    delay={0}
                    animateOnce
                >
 
                    <button className="know-more-button join-itsa-button">
                        <p className="h5 white">Join ITSA</p>
                    </button>

                </ScrollAnimation>

            </div>
        </div>
    )
}

export default TeamLeaders