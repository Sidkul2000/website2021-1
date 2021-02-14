import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './teams.css'

const TeamMember = ({
    name,year,lin,gh,insta
}) => {
    
    return (
				<div className="">   
				{console.log("HIII")}           
                <div className="member-box">
                    <div className="member-box-photo">
                    </div>
                    <p className="h4 primary">{name}</p>
										<p className="t0 mediumgrey">{year}</p>
										<div style={{display:'flex',justifyContent:"center"}}>
											<a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
											<a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
											<a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
									</div>
								</div>
								

            
        </div>
    )
}

export default TeamMember