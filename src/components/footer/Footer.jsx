import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import './footer.css'
import {FaGithub,FaFacebook,FaInstagram,FaLinkedin,FaMapMarkerAlt,FaPhoneAlt,FaExternalLinkAlt} from "react-icons/fa";
import { Command, ExternalLink, Link, Link2, Mail, Map, Phone } from 'react-feather';


const Footer = () => {
    const { theme , setTheme } = useTheme()


    
  return(
    <div> 
     <section className= {theme === 'dark'? "footer dark-mode":"footer"} >
       <section className="footer-info">
           {/*Left address section */}
         <section className="footer-info-left">
           <section className="footer-address">
             <a className={theme==='dark'? "link link-dark": "link"}
                href="https://www.google.com/maps/place/PVG'S+COET/@18.4900336,73.8525488,15z/data=!4m5!3m4!1s0x0:0x12df641707ea878e!8m2!3d18.4900336!4d73.8525488"
                target="blank"
             >
               <Map size={25} className="link-pad"/>
             </a>
           </section>
           <section className="address">
             <p className="t0" >Pune Vidyarthi Griha's College Of Engineering and Technology, Pune</p>
             <br/>
             <p className="t0">44 Vidya Nagari, Shivdarshan, Parvati, Pune 411009, Maharashtra, India</p>
           </section>
         </section>

         {/* middle contact section */}
          <section className="footer-info-center">
            <section className="contact">
              <Command className="link-pad" size={25}/>
            </section>
            <section className="Email">
              <h3 className="h4">Check us out on Linktree</h3>
              <a href="https://linktr.ee/itsapvg" className="t0" style={{textDecoration: 'none'}}>https://linktr.ee/itsapvg</a>
            </section>
          </section>

          {/* right social media section */}
          <section className="footer-info-right">
            
            <section className="Social">
                <ExternalLink size={25} className="link-pad"/>
            </section>
            
            <section className="Social-media">
            
            <p className="h4">Follow us on </p>

            {/* Linkdin */}
            <a
                className={theme==='dark'? "link link-dark": "link"}
                href="https://www.linkedin.com/company/itsapvg/?originalSubdomain=in"
                target="blank"
              >
                <FaLinkedin/> <p className="t1">LinkedIn</p> 
              </a>
              
              <br></br>

            {/* Instagram */}
              <a  
                href="https://www.instagram.com/itsapvg/ " 
                target="blank" 
                className={theme==='dark'? "link link-dark": "link"}
              >
                <FaInstagram/>  <p className="t1">Instagram </p>
              </a>

              <br></br>

              {/* facebook */}
              {/* <a 
                className={theme==='dark'? "link link-dark": "link"}
                href="https://www.facebook.com/itsapvg/"
                target="blank"
              >
                <FaFacebook/>  <p className="t1">Facebook</p>
              </a>

              <br/> */}

              <a 
                className={theme==='dark'? "link link-dark": "link"}
                href="https://www.github.com/ITSA-PVG/"
                target="blank"
              >
                <FaGithub/>  <p className="t1">Github</p>
              </a>

              {/*
              GitHub
              <br></br>
              <a 
                className={theme==='dark'? "link link-dark": "link"}
                href=""
                target="blank"
              >
                <FaGithub/>  Github
              </a>
              */}
              
              
            </section>
          </section>
       </section>
     </section>
     
     </div>
  )
}

export default  Footer
