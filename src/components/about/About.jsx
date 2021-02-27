import React, { useState, useRef, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import './about.css'
import curve from '../../assets/curve.svg'
import { importAll, isElementInViewport } from '../../utils'
import kurukshetra from '../../assets/kurukshetra.mp4'
import fiesta from '../../assets/fiesta.mp4'
import acedamic from '../../assets/acedamic.mp4'

const aboutInfo = [
    {
        title:'Gaming Events',
        description:"Kurukshetra is ITSA's gaming event where students show off their gaming skills & win exciting prizes",
        media: kurukshetra
    },
    {
        title:'Fiesta',
        description:"ITSA's annual event Fiesta involves fun filled technical and non technical activites",
        media: fiesta
    },
    {
        title:'Academic Workshops',
        description:'Workshops on various technical and non technical topics are conducted by ITSA committee every year',
        media: acedamic
    },
]



const AboutCard = ({
    title, 
    description,
    index,
    media
}) => {

    const [isHovering, setIsHovering] = useState(true)

    return (

        <div 
            className={`feature feature-${index}`}
            onMouseEnter={() => setIsHovering(false)}
            onMouseLeave={() => setIsHovering(true)}
        >
            <div className={isHovering ? "feature-image-container-hover":"feature-image-container"}>
                <video src={media} autoPlay loop muted/>
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

    const [scrollHeight, setScrollHeight] = useState(0)

    let scrolled = 0

    const images = importAll(require.context('../../assets', false, /\.(jpeg|jpg|JPG)$/ )) 


    useEffect(() => {

        window.addEventListener('scroll', () => {
            
            setScrollHeight(document.documentElement.scrollTop - window.innerHeight * 1.75 )
        })

    }, [])

    const SingleCard = ({
        srcImage
    }) => {
        
        return (
            <div className="single-card">
                <img src={srcImage}/>
            </div>
        )
    }

    const DoubleCard = ({
        srcImage1,
        srcImage2, 
    }) => {
        return (
            <div className="double-card">
                <div className="double-card-upper">
                    <img src={srcImage1}/>
                </div>
                <div className="double-card-lower">
                    <img src={srcImage2}/>
                </div>
            </div>
        )
    }

    const TripleCard = ({
        srcImage1,
        srcImage2,
        srcImage3
    }) => {
        return (
            <div className="triple-card">
                <div className="triple-card-left">
                    <div className="triple-card-left-upper">
                        <img src={srcImage1}/>
                    </div>
                    <div className="triple-card-left-lower">
                        <img src={srcImage2}/>
                    </div>
                </div>
                <div className="triple-card-right">
                    <img src={srcImage3}/>
                </div>
            </div>
        )
    }

    const SampleCard = ({single, double, triple, src1, src2, src3}) => {
        
        return (
            <div className={triple ? "sample-card triple-width" : "sample-card"}>
                {
                    single ? <SingleCard srcImage={src1}/> 
                    : double ? <DoubleCard srcImage1={src1} srcImage2={src2}/>
                    : triple ? <TripleCard srcImage1={src1} srcImage2={src2} srcImage3={src3}/> : null
                }
            </div>
    )}
    
    return (
        <div className="section-container about-container">
            
            <div className='curve-div'>
                <img src={curve} className="curve"/>
            </div>
                
            <div className="about-title">
                <ScrollAnimation 
                        animateIn="fadeIn"
                        offset={20}
                        duration={1}
                        delay={20}
                        animateOnce
                >
                    <p className="h2 primary">What does ITSA do ?</p>
                    <p className="t0 mediumgrey">Throughout the acedamic year, ITSA conducts exciting events and activites both within and outside the department</p>
                </ScrollAnimation>
            </div>



            <div className="features-container">

                {
                    aboutInfo.map((item, index) => {
                        return <AboutCard title={item.title} description={item.description} index={index} media={item.media}/>
                    })
                }
               
            </div>

            <div className="itsa-def">
                    <div className="itsa-def-left">
                        <p className="itsa-def-text h3">What is ITSA and what do we do ?</p>
                    </div>
                
                <div className="itsa-def-right">
                    <p className="itsa-desc-text t0 mediumgrey">ITSA stands for Information Technology Student's Association.</p>
                    <br/>
                    <p className="itsa-desc-text t0 mediumgrey">Throughout the acedamic year, we conduct various events, workshops, competitions, webinars and exciting activites that enrich the student's lives and widens their knowledge bases</p>
                </div>
            </div>

            

            <div style={{position: 'relative', width:'100%'}}>
            
                <div className="sticky-container">
                    
                    <p className="h0 ta-center primary recentworks-text">Recent Works</p>
                    

                    <div className="horizontal-translate-container" style={{transform:`translateX(-${scrollHeight * 0.3}px)`}}>
                        <div className="cards-container">
                        
                            <SampleCard single src1={images['e1.1.JPG'].default}/>
                            <SampleCard triple src1={images['e3.1.JPG'].default} src2={images['e3.2.JPG'].default} src3={images['e1.2.JPG'].default}/>
                            <SampleCard double src1={images['e2.1.JPG'].default} src2={images['e2.2.JPG'].default}/>
                            <SampleCard single src1={images['e1.3.JPG'].default}/>
                            <SampleCard double src1={images['e2.3.JPG'].default} src2={images['e2.4.JPG'].default}/>
                            <SampleCard single src1={images['e1.1.JPG'].default}/>
                            <SampleCard triple src1={images['e3.1.JPG'].default} src2={images['e3.2.JPG'].default} src3={images['e1.2.JPG'].default}/>
                            <SampleCard double src1={images['e2.1.JPG'].default} src2={images['e2.2.JPG'].default}/>
                            

                        </div>
                    </div>
                </div>
            </div>

            <div className="itsa-def" style={{padding:'20px 10%'}}>
                <div className="itsa-def-left">
                    <p className="itsa-def-text h3">Our leaders & inspiration</p>
                </div>
                <div className="itsa-def-right-inspiration">
                    <div className="teacher-box">
                        
                        <p className="h4 primary">Prof. Mrs. S A Deshpande</p>
                        <p className="t0 mediumgrey">ITSA Coordinator</p>
                    </div>
                    <div className="teacher-box">
                        
                        <p className="h4 primary">Prof. Dr. S A Mahajan</p>
                        <p className="t0 mediumgrey">HOD, IT Department</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default About