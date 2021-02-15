import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './teams.css'
import TeamMember from './TeamMember'
import TeamSidebar from './TeamSidebar'
import Footer from '../footer/Footer'
import { teamLeadersInfo, teamsInfo } from '../../info'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

const teamMembers = [
    {
        name: "Member 1",
        year: "TE"
    },
    {
        name: "Member 2",
        year: "TE"
    },
    {
        name: "Member 3",
        year: "TE"
    },
    {
        name: "Member 4",
        year: "TE"
    },
    {
        name: "Member 5",
        year: "SE"
    },
    {
        name: "Member 6",
        year: "SE"
    },
    {
        name: "Member 7",
        year: "SE"
    },
    {
        name: "Member 8",
        year: "SE"
    },

]


const Teams = ({
    props
}) => {
    
    return (
        <div>

        <TeamSidebar />

        <div className="teams-outer">

        
        {
            teamsInfo.map((team, index) => {

                const teamClass = `team-${team.teamName}`
                return (
                    <div className={`section-container team-full-container ${teamClass}`}>
                        
                        <Link to="/">
                            <p className="t1 primary back-text"><ArrowLeft size={20} className="primary"/>back to teams</p>
                        </Link>

                        <div className="team-header">
                    
                            <div className="team-header-left ">
                                <p className="h2 ta-left" style={{color: team.teamColor}}>{team.teamName}</p>
                                <p className="t0 mediumgrey">{team.description}</p> 
                            </div>      

                            <div className="team-header-right">
                            
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
                            </div>
                        
                        </div>

                        <div className="member-container">  
                            {team.teamMembers.map(member => {
                                return <TeamMember name={member.teamMemberName} year={member.class} image={member.image} social={member.social}/>
                            })}					
                        </div>
                    </div>

                )
            })
        }
        </div>
        <Footer />
        </div>
    )
}

export default Teams