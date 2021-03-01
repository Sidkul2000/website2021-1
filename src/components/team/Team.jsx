import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './team.css'

import techteam from '../../assets/tech-team.svg'
import printteam from '../../assets/print-team.svg'
import notteam from '../../assets/not-team.svg'
import finteam from '../../assets/fin-team.svg'
import eventteam from '../../assets/event-team.svg'
import { Bell, Code, DollarSign, Film, Layers, Tool } from 'react-feather';
import TeamLeaders from '../TeamLeaders/TeamLeaders'
import { Link } from 'react-router-dom'


const Team = ({
    props
}) => {
    

    return (
        <div className="section-container team-container">

            
            <p className="h2 primary ta-center" style={{marginTop: 70}}>Complete Team</p>
            
            <div className='team-title'>

                    <ScrollAnimation 
                        animateIn="fadeIn"
                        offset={70}
                        delay={0}
                        animateOnce
                    >
                    
                    
                    <div className="team-top">
                        
                        <Link to="/teams/0" target="_blank">
                            <div className='team-box tb0'>
                                <img src={techteam}/>
                                <Code className="primary team-icon"/>
                                <p className='h4 primary'>Team Web and Tech</p>
                                <p className='t1 mediumgrey ourteams-text'>Manages the website & conducts technical events and workshops</p>
                                <p className="h5 white view-button">View full team</p>
                            </div>
                        </Link>
                            
                        <Link to="/teams/1" target="_blank">
                            <div className='team-box tb1'>
                                <img src={notteam}/>
                                <Bell className="primary team-icon"/>
                                <p className='h4 primary'>Team Notification</p>
                                <p className='t1 mediumgrey ourteams-text'>Acts as a bridge between the committee and the students</p>
                                <p className="h5 white view-button">View full team</p>
                            </div>
                        </Link>
                        
                        <Link to="/teams/2" target="_blank">
                            <div className='team-box tb2'>
                                <img src={finteam}/>
                                <DollarSign className="primary team-icon"/>
                                <p className='h4 primary'>Team Finance</p>
                                <p className='t1 mediumgrey ourteams-text'>Tracks and manages the financial activites and budget of events</p>
                                <p className="h5 white view-button">View full team</p>
                            </div>
                        </Link>
                    </div>

                    <div className="team-bottom">
                        <Link to="/teams/3" target="_blank">
                            <div className='team-box tb3'>
                                <img src={printteam}/>
                                <Layers className="primary team-icon"/>
                                <p className='h4 primary'>Team Student Coordination and Printing</p>
                                <p className='t1 mediumgrey ourteams-text'>Responsible for poster design, T-Shirt printing and event slot allotment</p>
                                <p className="h5 white view-button">View full team</p>
                            </div>
                        </Link>
                        
                        <Link to="/teams/4" target="_blank">
                            <div className='team-box tb4'>
                                <img src={eventteam}/>
                                <Film className="primary team-icon"/>
                                <p className='h4 primary'>Team Event Management and Production</p>
                                <p className='t1 mediumgrey ourteams-text'>Handles the pre-event planning, logistics and event day programmes</p>
                                <p className="h5 white view-button">View full team</p>
                            </div>
                        </Link>
                    </div>
                    
                    </ScrollAnimation>
                
            </div>

        </div>
    )
}


export default Team