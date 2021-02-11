import React, { useState, useRef, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import './about.css'
import curve from '../../assets/curve.svg'
import sample from '../../assets/sample.png'

const aboutInfo = [
    {
        title:'Gaming Events',
        description:' Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do',
    },
    {
        title:'Webinars',
        description:' Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do',
    },
    {
        title:'Academic Workshops',
        description:' Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do',
    },
]


const calcDynamicHeight = objectWidth => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    return objectWidth - vw + vh + 150
}
  

const handleDynamicHeight = (ref, setDynamicHeight) => {
    const objectWidth = ref.current.scrollWidth
    const dynamicHeight = calcDynamicHeight(objectWidth)
    setDynamicHeight(dynamicHeight)
}
  

const applyScrollListener = (ref, setTranslateX) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -ref.current.offsetTop
      setTranslateX(offsetTop)
    })
}


const AboutCard = ({
    title, 
    description,
    index
}) => {

    const [isHovering, setIsHovering] = useState(true)

    return (

        <div 
            className={`feature feature-${index}`}
            onMouseEnter={() => setIsHovering(false)}
            onMouseLeave={() => setIsHovering(true)}
        >
            <div className={isHovering ? "feature-image-container-hover":"feature-image-container"}>
                <img src="https://picsum.photos/500/300"/>
            </div>
            <div className={isHovering ? "feature-info-hover":"feature-info"}>
                <p className={`h4 ta-center feature-title-${index}`}>{title}</p>
                <p 
                    className="t0 mediumgrey ta-center"
                    style={{visibility: isHovering ? 'visible' : 'hidden', transition: '0.25s ease-in-out', marginTop: 15}}
                >
                   {description}
                </p>
            </div>
        </div>
    )
}

const About = ({
    props
}) => {

    const [dynamicHeight, setDynamicHeight] = useState(null)
    const [translateX, setTranslateX] = useState(0)

    const containerRef = useRef(null)
    const objectRef = useRef(null)

    const resizeHandler = () => {
        handleDynamicHeight(objectRef, setDynamicHeight)
    }
    

    useEffect(() => {

        handleDynamicHeight(objectRef, setDynamicHeight)
        window.addEventListener("resize", resizeHandler)
        applyScrollListener(containerRef, setTranslateX)

    }, [])

    const SampleCard = () => {
        return <div className="sample-card"></div>
    }
    
    return (
        <div className="section-container about-container">
            
            <div className='curve-div'>
                <img src={curve} className="curve"/>
            </div>
                
            <div className="about-title">
                <ScrollAnimation 
                        animateIn="fadeIn"
                        offset={50}
                        duration={1.2}
                        delay={200}
                        animateOnce
                >
                    <p className="h2 primary">What does ITSA do ?</p>
                    <p className="t0 mediumgrey">Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do  </p>
                </ScrollAnimation>
            </div>



            <div className="features-container">

                {
                    aboutInfo.map((item, index) => {
                        return <AboutCard title={item.title} description={item.description} index={index}/>
                    })
                }
               
            </div>

            <div className="itsa-def">
                    <div className="itsa-def-left">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            offset={70}
                            delay={0}
                            animateOnce
                        >
                            <p className="itsa-def-text h3">What is ITSA and what do we do ?</p>
                        </ScrollAnimation>
                    </div>
                
                <div className="itsa-def-right">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            offset={70}
                            delay={400}
                            animateOnce
                        >
                            <p className="itsa-desc-text t0 mediumgrey">Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, elifi aso su carla lu ef</p>
                            <p className="itsa-desc-text t0 mediumgrey">Lorem ipsum dolor sit amet consecutueur regino psal sodam dowe remol adipisicing elit, sed do Lorem ipsum dolor sit amet consecutueur </p>
                        </ScrollAnimation>
                </div>
            </div>

            

            <div style={{height: `${dynamicHeight}px`, position: 'relative', width:'100%'}}>
            
                <div className="sticky-container" ref={containerRef}>
                    
                    <p className="h0 ta-center primary recentworks-text">Recent Works</p>
                    

                    <div className="horizontal-translate-container" style={{ transform: `translateX(${translateX}px)` }} ref={objectRef}>
                        <div className="cards-container">
                        {
                            Array(5)
                                .fill(0)
                                .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
                        }

                        </div>
                    </div>
                </div>
            </div>

            <div className="itsa-def" style={{padding:'20px 10%'}}>
                <div className="itsa-def-left">
                    <p className="itsa-def-text h3">Our leaders and inspiration</p>
                </div>
                <div className="itsa-def-right-inspiration">
                    <div className="teacher-box">
                        <div className="teacher-box-photo">

                        </div>
                        <p className="h4 primary">Prof. Mrs. S A Deshpande</p>
                        <p className="t0 mediumgrey">ITSA Coordinator</p>
                    </div>
                    <div className="teacher-box">
                        <div className="teacher-box-photo">

                        </div>
                        <p className="h4 primary">Prof. Dr. S A Mahajan</p>
                        <p className="t0 mediumgrey">HOD, IT Department</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default About