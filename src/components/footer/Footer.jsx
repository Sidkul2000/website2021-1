import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import './footer.css'
import {FaGithub,FaFacebook,FaInstagram,FaLinkedin,FaMapMarkerAlt,FaPhoneAlt,FaExternalLinkAlt} from "react-icons/fa";


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
               <p><FaMapMarkerAlt/></p>
             </a>
           </section>
           <section className="address">
             <t1 >Pune Vidyarthi Griha's College Of Engineering and Technology, Pune</t1>
             <p></p>
             <t1>44 Vidya Nagari, Shivdarshan, Parvati, Pune 411009, Maharashtra, India</t1>
           </section>
         </section>

         {/* middle contact section */}
          <section className="footer-info-center">
            <section className="contact">
              <p><FaPhoneAlt/></p>
            </section>
            <section className="Email">
              <h3>Contact us at :</h3>
              <t1>itsapvgcoet@gmail.com</t1>
            </section>
          </section>

          {/* right social media section */}
          <section className="footer-info-right">
            <section className="Social">
                <p><FaExternalLinkAlt/></p>
            </section>
            <section className="Social-media">
            <h3>Follow us on :</h3>

            {/* Linkdin */}
            <a
                className={theme==='dark'? "link link-dark": "link"}
                href="https://www.linkedin.com/company/itsapvg/?originalSubdomain=in"
                target="blank"
              >
                <FaLinkedin/> <t2>LinkedIn</t2> 
              </a>
              
              <br></br>

            {/* Instagram */}
              <a  
                href="https://www.instagram.com/itsapvg/ " 
                target="blank" 
                className={theme==='dark'? "link link-dark": "link"}
              >
                <FaInstagram/>  <t2>Instagram </t2>
              </a>

              <br></br>

              {/* facebook */}
              <a 
                className={theme==='dark'? "link link-dark": "link"}
                href="https://www.facebook.com/itsapvg/"
                target="blank"
              >
                <FaFacebook/>  <t2>Facebook</t2>
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
       <hr className="footer-seperator"/>
     </section>
     </div>
  )
}

export default  Footer
