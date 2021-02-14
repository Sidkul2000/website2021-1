import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import './teams.css'
import TeamMember from './TeamMember'
import TeamSidebar from './TeamSidebar'
import Footer from '../footer/Footer'

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

        <p className="h1 ta-center primary"  >Meet the Teams</p>

        <div className="section-container team-container " style={{paddingLeft: "100px"}}>
            <div className="team-header" style={{boxShadow: "-8px 8px #0085FF"}} >
                <div className="team-header-left ">
                    <p className="h1 ta-center tt0 " style={{textAlign: "left"}}>Team Web and Tech</p>
                    <p className="h4 primary">teamPurpose</p> 
                </div>      

                <div className="team-header-right">
                <div className="team-head" style={{display:"flex", flexWrap: "wrap"}} >
                    
                <p className="team-head-data">
                    <p className="h4 primary tt0 ">Bhujang Shinde</p>
                    <p className="h5 primary">Head of Team Web and Tech</p>
                    
                    <div  style={{display:'flex',justifyContent:"flex-end"}}>
                        <a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
                    </div>
                        </p>
                        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image" 
                            style={{width: "150px",height: "150px", marginLeft: "50px", borderRadius: "50%"}}
                        />
                    </div>
                </div>
            
            </div>

            <div className="member-container">  
                {teamMembers.map(member => {
                    return <TeamMember name={member.name} year={member.year}/>
                })}					
            </div>
        </div>


        <div className="section-container team-container " style={{paddingLeft: "100px"}}>
            <div className="team-header" style={{boxShadow: "-8px 8px #FFDB00"}} >
                <div className="team-header-left ">
                    <p className="h1 ta-center tt1 " style={{textAlign: "left"}}>Team Notification </p>
                    <p className="h4 primary">teamPurpose </p> 
                </div>      

                <div className="team-header-right">
                    <div className="team-head" style={{display:"flex", flexWrap: "wrap"}} >
                        
                    <p className="team-head-data">
                        <p className="h4 primary tt1 ">Pranashree Patil</p>
                        <p className="h5 primary">Head of Team Notification</p>
                        
                        <div  style={{display:'flex',justifyContent:"flex-end"}}>
                            <a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
                            <a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
                            <a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
                        </div>
                    </p>
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image" 
                        style={{width: "150px",height: "150px", marginLeft: "50px", borderRadius: "50%"}}
                    />
                    </div>
                </div>
            </div>

            <div className="member-container">  
                {teamMembers.map(member => {
                    return <TeamMember name={member.name} year={member.year}/>
                })}	
            </div>
            
        </div>

        <div className="section-container team-container " style={{paddingLeft: "100px"}}>
            <div className="team-header" style={{boxShadow: "-8px 8px #7E08D9"}} >
                <div className="team-header-left ">
                    <p className="h1 ta-center tt2 " style={{textAlign: "left"}}>Team Notification </p>
                    <p className="h4 primary">teamPurpose</p> 
                </div>      

                <div className="team-header-right">
                <div className="team-head" style={{display:"flex", flexWrap: "wrap"}} >
                    
                <p className="team-head-data">
                    <p className="h4 primary tt2 ">Pranashree Patil</p>
                    <p className="h5 primary">Head of Team Notification</p>
                    
                    <div  style={{display:'flex',justifyContent:"flex-end"}}>
                        <a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
                    </div>
                        </p>
                        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image" 
                style={{width: "150px",height: "150px", marginLeft: "50px", borderRadius: "50%"}}
                />
                
            </div>
                </div>
                

            </div>

            <div className="member-container">  
                {teamMembers.map(member => {
                    return <TeamMember name={member.name} year={member.year}/>
                })}	
                            
            </div>
                
        </div>


        <div className="section-container team-container " style={{paddingLeft: "100px"}}>
            <div className="team-header" style={{boxShadow: "-8px 8px #02B93F"}} >
                <div className="team-header-left ">
                    <p className="h1 ta-center tt3 " style={{textAlign: "left"}}>Team Notification </p>
                    <p className="h4 primary">teamPurpose</p> 
                </div>      

                <div className="team-header-right">
                <div className="team-head" style={{display:"flex", flexWrap: "wrap"}} >
                    
                <p className="team-head-data">
                    <p className="h4 primary tt3 ">Pranashree Patil</p>
                    <p className="h5 primary">Head of Team Notification</p>
                    
                    <div  style={{display:'flex',justifyContent:"flex-end"}}>
                        <a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
                        <a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
                    </div>
                        </p>
                        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image" 
                style={{width: "150px",height: "150px", marginLeft: "50px", borderRadius: "50%"}}
                />
                
            </div>
                </div>
                

            </div>

            <div className="member-container">  
                {teamMembers.map(member => {
                    return <TeamMember name={member.name} year={member.year}/>
                })}	
                            
            </div>

                
        </div>
      

        <div className="section-container team-container " style={{paddingLeft: "100px"}}>
            <div className="team-header" style={{boxShadow: "-8px 8px #ea4335"}} >
            <div className="team-header-left ">
            <p className="h1 ta-center tt4 " style={{textAlign: "left"}}>Team Notification </p>
            <p className="h4 primary" > teamPurpose </p> 
            </div>      

            <div className="team-header-right">
            <div className="team-head" style={{display:"flex", flexWrap: "wrap"}} >

            <p className="team-head-data">
            <p className="h4 primary tt4 ">Pranashree Patil</p>
            <p className="h5 primary">Head of Team Notification</p>

            <div  style={{display:'flex',justifyContent:"flex-end"}}>
                <a href="" target="_blank"><FaFacebook size={20} style={{margin: "5"}} className="primary"/></a>
                <a href="" target="_blank"><FaInstagram size={20}  style={{margin: "5"}} className="primary"/></a>
                <a href="" target="_blank"><FaLinkedin size={20}  style={{margin: "5"}} className="primary"/></a>
            </div>
                </p>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt="Image" 
            style={{width: "150px",height: "150px", marginLeft: "50px", borderRadius: "50%"}}
            />

            </div>
            </div>


            </div>

            <div className="member-container">  
            {teamMembers.map(member => {
            return <TeamMember name={member.name} year={member.year}/>
            })}	
                    
            </div>


        </div>


        <Footer />
        </div>
    )
}

export default Teams