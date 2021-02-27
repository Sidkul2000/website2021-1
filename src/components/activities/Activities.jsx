import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal'

import './activities.css'
import { ArrowLeft, X } from 'react-feather';
import { importAll } from '../../utils';

const customStyles = {
  content: {
    position: 'absolute',
    top: '8%',
    left: '13%',
    right: '13%',
    bottom: '8%',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    background:'black',
    outline: 'none',
    width: '74%',
    padding: '25px',
    alignSelf: 'center',
    height: 'auto',
    paddingTop: '30px'
    },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000aa',
    zIndex: 9999
  },
}

Modal.setAppElement(document.querySelector('#root'))


const activitiesInfo = [
    {
        key : '01',
        id : '01',
        title:'Alumni Connect',
        date:'28 November 2020',
        venue: 'Virtual',
        description:'ITSA arranged an Alumni Connect event on 28 th November. The speaker for this even was Akshay Kokane. He is a java developer at onetrust in Atlanta,GA . The basic idea to arrange this event was to give students more idea about Cloud Computing technology which is widely used in industry currently. The event was held virtually through Google meet platform and the whole session lasted for 2 hrs from 9:30 am to 11.40am. The students participated in the event were from second year and Third Year from all the departments of our college. From basic concepts like Saas,Iaas to hands-on experience were included in the event. Through interactive learning session, students were able to correlate the things and could clear all the doubts related to topics like higher education, currently growing new technologies in the industry etc.',
        speakers:[
          {
            name:'Akshay Kokane',
            occupation:'Java Developer',
            image:'https://akshaykokane.com/assets/images/myphoto.jpg',
          }
        ],
        images : importAll(require.context('../../assets/activities/alumni-connect', false, /\.(jpeg|jpg|JPG|PNG|png)$/ )) 
    },
    {
        key : '02',
        id : '02',
        title:'Wordpress Workshop',
        date:'10 November 2020',
        venue:'Virtual',
        speakers:[
          {
            name:'Shreya Mahajan',
            occupation:'Student',
            image:'https://drive.google.com/uc?id=14qmX7EaRT9R7OCQh2Rqs2HaH987NWVFC',
          },
          {
            name:'Sakshi Chidrewar',
            occupation:'Student',
            image:'https://drive.google.com/uc?id=1JcQvatFh_zE-0ORsSBni7WmhnFQApnMt',
          }
        ],
        description:'Designing a WordPress website is a part of academics. So ITSA arranged a workshop on 10 th November to make students aware about WordPress platform. The training was held from home on an online platform from 1:00-2.30 PM for 1.5 hours. The workshop was conducted by Shreya Mahajan and Sakshi Chidrewar from BE IT. Students from Third Year and Second Year of Information Technology department participated in the workshop. From basic concepts to publishing their own website, all parts were included. Through interactive learning, students were able to publish a website.',
        images : importAll(require.context('../../assets/activities/wordpress-workshop', false, /\.(jpeg|jpg|JPG|png|PNG)$/ )) 
    },
    
]


const Card = ({
  title, 
  description,
  date,
  venue,
  index,
  images,
  speakers
}) => {

    let imageArray = Object.values(images).map(img => img.default)
    description = description.length > 500 ? description.slice(0,500).concat('...') : description
    
    const modalSlides = imageArray.map(image => {
      return {
        media : image
      }
    })

    const [isOpen, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    const oddEven = index % 2 ? 'odd' : 'even'

    return(
      <div className="card-container">
         
          <div class={`table ${oddEven}`}>
          
            <div className="carousel-left left-side">
              
              <p className="h0 mediumgrey number">{`0${index}`}</p>
              <p className="h2 primary ta-left title">{title}</p>
              
              <div className="horizontal">
                <p className="h5 mediumgrey date">{date}</p>
                <div className="dot"></div>
                <p className="t2 mediumgrey contentcss" style={{textTransform:'uppercase'}}>{venue}</p>
              </div>
              
              <p className="t1 mediumgrey" style={{letterSpacing: 0.6}}>Event guests</p>
              
              <div className="speakers-container">
                {speakers ? speakers.map(speaker => {
                  return (
                    <div className="speaker">
                      <div className="speaker-photo">
                        <img src={speaker.image}/>
                      </div>
                      <div className="speaker-info">
                        <p className="t1 primary">{speaker.name}</p>
                        <p className="t1 mediumgrey">{speaker.occupation}</p>
                      </div>
                    </div>
                  )
                }) : null}
                
              </div>
              <p className="t0 mediumgrey contentcss">{description}</p>
              {/* <button className="know-more-button"  style={{marginLeft:0, transform: 'none', marginTop: 10}}>
                <p className="h5 white">Know more</p>
              </button> */}
            </div>
            
            <div className="carousel-right">
            
              <div className="main-image">
                <img className="image-class" alt="" src={imageArray[0]}/>
              </div>
            
              <div className="other-images">
                
                <div className="other-image">
                  <img className="image-class" alt="" src={imageArray[1]}/>
                </div>

                <div className="other-image plus-more" onClick={openModal}>
                  <img className="image-class" alt="" src={imageArray[2]}/>
                  <p className="h5 primary">+ {imageArray.length - 2} more</p>
                </div>
                
              </div>
            </div>

        </div>

        <Modal
          isOpen={isOpen}
          style={customStyles}
          onRequestClose={closeModal}
          closeTimeoutMS={200}
          
        >
          <X size={20} className="mediumgrey" style={{position: 'absolute', top: 20, right: 20, cursor:'pointer'}} onClick={closeModal}/>
          <p className="h4 primary ta-center">{title}</p>
          
          <Carousel 
            axis="horizontal"
            showStatus={false}
            showThumbs={false}
            showArrows
            autoPlay
            infiniteLoop
            swipeable
            transitionTime={200}
            interval={10000}
            emulateTouch
            showIndicators={false}
          >
              {imageArray.map(image => {
                return (
                  <div className="carousel-more-image">
                    <img src={image}/>
                  </div>
                )
              })}

          </Carousel>
        </Modal>
        
      </div>
    )
}

const Activities = ({
    props
}) => {

    const [activitesCount, setActivitiesCount] = useState(2)
    const [showLoadButton, setShowLoadButton] = useState(true)


    const loadMore = () => {
      if(activitesCount === activitiesInfo.length) {
        setShowLoadButton(false)
      }
      else if(activitesCount <= activitiesInfo.length-2) {
        setActivitiesCount(activitesCount+2)
      } else {
        setActivitiesCount(activitiesInfo.length - activitesCount)
      }
    }


    return (
        <div className="section-container activities-container">
          
          <p className="h0 primary ta-center" style={{marginTop:100}}>
            Our Activities
          </p>

          {/* <Carousel 
            axis="horizontal"
            showStatus={false}
            showThumbs
            showArrows
            autoPlay
            infiniteLoop
            swipeable
            transitionTime={200}
            interval={10000}
            emulateTouch
          >

            {activitiesInfo.map((item, index) => { 
              return <Card 
                title={item.title} 
                date={item.date} 
                description={item.description} 
                venue={item.venue}
                images={item.images} 
                index={index+1}
                speakers={item.speakers}
              />})
            }
          </Carousel>
           */}

          {
            activitiesInfo
              .slice(0, activitesCount)
              .map((item, index) => {
              return (
                <Card
                  title={item.title} 
                  date={item.date} 
                  description={item.description} 
                  venue={item.venue}
                  images={item.images} 
                  index={index+1}
                  speakers={item.speakers}
                />
              )
            })
          }

          <div className="load-button" onClick={loadMore} style={{visibility: showLoadButton ? "visible" : "hidden"}}>
            <p className="h5 mediumgrey">load more</p>
          </div>

          <p className="h3 primary ta-center"  style={{marginTop: 100}}>Have an idea for an event? Want to know more?</p>
          <p className="t0 ta-center mediumgrey" style={{marginTop: 30, fontSize: 15, padding:'0 20px'}}>Get in touch with us on our email. We'll get back to you ASAP &#128516;</p>
          
          <button className="know-more-button join-itsa-button"  style={{marginTop: 40}}>
            <a href="mailto:itsapvg@gmail.com">
              <p className="h5 white">Write an email</p>
            </a>
          </button>
        </div>
    )
}

export default Activities
