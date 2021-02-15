import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './teams.css'

const TeamMember = ({
    name,
	year
}) => {
    
    return (
		<div className="">   
	        
            <div className="member-box">
                
				<div className="member-box-photo">
					
					<img src="https://picsum.photos/200"/>
					
					<div className="team-member-social">
						<a href="" target="_blank"><FaFacebook size={20} className="primary"/></a>
						<a href="" target="_blank"><FaInstagram size={20} className="primary"/></a>
						<a href="" target="_blank"><FaLinkedin size={20} className="primary"/></a>
					</div>
                </div>
                
				<p className="h4 primary">{name}</p>

				<p className="t0 mediumgrey">{year}</p>
				
				
			</div>  
        </div>
    )
}

export default TeamMember