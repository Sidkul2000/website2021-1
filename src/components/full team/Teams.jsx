import React, { useEffect, useState } from 'react'
import './teams.css'
import TeamMember from './TeamMember'
import TeamSidebar from './TeamSidebar'
import Footer from '../footer/Footer'
import { fullCommitteeImages, teamsInfo } from '../../info'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

import { loadImage } from '../../utils'

const Teams = ({
    props
}) => {

    const [imagesLoaded, setImagesLoaded] = useState(false)

    useEffect(() => {
        
        Promise.all(fullCommitteeImages.map(image => loadImage(image)))
            .then(() => {
                setImagesLoaded(true)
                const count = parseInt(window.location.href.split('/')[5])
                console.log(count)
                window.scroll({
                    top: window.innerHeight * count, 
                    left:0, 
                    behavior:'auto'
                })
            })
            .catch(err => console.log("Failed to load images", err))
    }, [])
    
    return imagesLoaded ? (
        <div>

        <TeamSidebar />

        <div className="teams-outer">

        
        {
            teamsInfo.map((team, index) => {

                const teamClass = `team-${team.teamName}`
                return (
                    <div className={`section-container team-full-container ${teamClass}`}>
                        
                        <Link to="/">
                            <p className={`t1 primary back-text ${index === 0? '' : 'no-display'}`}><ArrowLeft size={20} className="primary"/>back to teams</p>
                        </Link>

                        <div className="team-header">
                    
                            <div className="team-header-left ">
                                <p className="h2" style={{color: team.teamColor}}>{team.teamName}</p>
                                <p className="t0 mediumgrey">{team.description}</p> 
                            </div>      

                            {/* <div className="team-header-right">
                            
                                <div className="team-head">
                                
                                    <div className="team-head-data">
                                        <p className="h4 primary"  style={{color: team.teamColor}}>{team.teamHead.teamHeadName}</p>
                                        <p className="h5 mediumgrey">Head of {team.teamName}</p>
                                    
                                        <div className="team-head-social">
                                            <a href="" target="_blank"><FaFacebook size={20} className="primary"/></a>
                                            <a href="" target="_blank"><FaInstagram size={20} className="primary"/></a>
                                            <a href="" target="_blank"><FaLinkedin size={20} className="primary"/></a>
                                        </div>
                                    </div>
                                    
                                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image"/>

                                </div>
                            </div> */}
                        
                        </div>

                        <div className="member-container">  
                            {team.teamMembers.map(member => {
                                return <TeamMember firstName={member.firstName} lastName={member.lastName} className={member.class} profilePicture={member.profilePicture} instagramHandle={member.instagramHandle} githubHandle={member.githubHandle} linkedinHandle={member.linkedinHandle}/>
                            })}					
                        </div>
                    </div>

                )
            })
        }
        </div>
        <Footer />
        </div>
    ) : <div className='loading-container'>
            <div className="ball-container">
                <div className="ball"></div>
            </div>
            <p className="h3 white">Just a moment..</p>
            {/*<p className="t0 mediumgrey" style={{marginTop: 30}}>We are loading the website as fast as we can &#128516;</p>*/}
        </div>
}

export default Teams