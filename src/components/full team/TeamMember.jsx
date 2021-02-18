import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './teams.css'

const TeamMember = ({
    firstName,
	lastName,
	className,
	instagramHandle = '',
	linkedinHandle = '',
	githubHandle = '',
	profilePicture
}) => {
    
    return (
		
	        
            <div className="member-box">
                
				<div className="member-box-photo">
					
					<img src={profilePicture}/>
					
					<div className="team-member-social">
						<a href={githubHandle} target="_blank"><FaGithub size={20} className="primary"/></a>
						<a href={instagramHandle} target="_blank"><FaInstagram size={20} className="primary"/></a>
						<a href={linkedinHandle} target="_blank"><FaLinkedin size={20} className="primary"/></a>
					</div>
                </div>

				<div className="change-align">

					<p className="h4 primary">{firstName} {lastName}</p>

					<p className="t0 mediumgrey">{className}</p>
				
				</div>
                
				
				
			</div>  
       
    )
}

export default TeamMember