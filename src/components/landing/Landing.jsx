import React, { useEffect } from 'react'
import Parallax from 'parallax-js'

import './landing.css'
import parallaxgreen from '../../assets/parallax-green.svg'
import parallaxyellow from '../../assets/parallax-yellow.svg'
import parallaxblue from '../../assets/parallax-blue.svg'
import parallaxgrey from '../../assets/parallax-grey.svg'
import useRainbow from '../../hooks/useGradient'

const Landing = ({
    props
}) => {

    useEffect(() => {
        let scene = document.getElementById('scene')
        new Parallax(scene)
    })

    const transitionDelay = 1000 * 1.25
    const colors = useRainbow({intervalDelay: 1000})
    const colorKeys = Object.keys(colors)
    
    return (
        <div className="section-container landing-container">
            
            <div id="scene"> 

                <div data-depth={0.3} className="parallax-green-large">
                    <img src={parallaxgreen} className="parallax-shadow"/>
                </div>
                <div data-depth={0.3} className="parallax-yellow-large">
                    <img src={parallaxyellow} className="parallax-shadow"/>
                </div>
                <div data-depth={0.15} className="parallax-blue-large">
                    <img src={parallaxblue} className="parallax-shadow"/>
                </div>
                <div data-depth={0.4} className="parallax-grey-large">
                    <img src={parallaxgrey} className="parallax-shadow"/>
                </div>
                <div data-depth={0.7} className="parallax-green-small">
                    <img src={parallaxgreen} className="parallax-shadow"/>
                </div>
                <div data-depth={0.5} className="parallax-yellow-small">
                    <img src={parallaxyellow} className="parallax-shadow"/>
                </div>
                <div data-depth={0.9} className="parallax-blue-small">
                    <img src={parallaxblue} className="parallax-shadow"/>
                </div>
                <div data-depth={0.7} className="parallax-grey-small">
                    <img src={parallaxgrey} className="parallax-shadow"/>
                </div>

            </div>

            <div className="landing-info">
                <div className="slogan">
                    <p className="h0 ta-center linear-wipe">
                        Design driven
                    </p>
                    <p className="h0 ta-center white">
                        Development
                    </p>
                    <p className="h0 ta-center linear-wipe">
                        and more stuff
                    </p>
                    <p className="h0 ta-center white">
                        about ITSA
                    </p>
                </div>

                <p className="h4 blue" style={{fontWeight: 600}}>#ExploreToInspire</p>

                <button 
                    className="know-more-button"
                    style={{
                        ...colors,
                        transition: `
                          ${colorKeys[0]} ${transitionDelay}ms linear,
                          ${colorKeys[1]} ${transitionDelay}ms linear,
                          ${colorKeys[2]} ${transitionDelay}ms linear
                        `,
                        background: `
                          radial-gradient(
                            circle at top left,
                            var(${colorKeys[2]}),
                            var(${colorKeys[1]}),
                            var(${colorKeys[0]})
                          )
                        `,
                    }}
                >
                    <p className="h5 white">Know More</p>
                </button>
                
            </div>
            {/* <p className="h0">This is h0</p>
            <p className="h1">This is h1</p>
            <p className="h2">This is h2</p>
            <p className="h3">This is h3</p>
            <p className="h4">This is h4</p>
            <p className="h5">This is h5</p>

            <p className="t0">This is t0</p>
            <p className="t1">This is t1</p>
            <p className="t2">This is t2</p> */}
            

        </div>
    )
}

export default Landing