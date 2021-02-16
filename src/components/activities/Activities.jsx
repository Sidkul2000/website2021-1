import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './activities.css'
import { ArrowLeft } from 'react-feather';


const activitiesInfo = [
    {
        key : '01',
        id : '01',
        title:'Event name or slogan',
        date:'26 January 2021',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image1: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image2: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image3: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
    {
        key : '02',
        id : '02',
        title:'Event name or slogan or activity name',
        date:'12 January 2021',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image1: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image2: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image3: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
    {
        key : '03',
        id : '03',
        title:'Event name or slogan or activity name',
        date:'13 January 2021',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image1: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image2: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image3: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
]


const Card = ({
  title, 
  description,
  date,
  image1,
  image2,
  image3,
  index
}) => {
    return(
      <div className="card-container">
         
          <div class="table">
          
            <div className="carousel-left left-side">
              <p className="h0 mediumgrey number">{`0${index}`}</p>
              <p className="h2 primary ta-left title">{title}</p>
              <p className="h5 mediumgrey contentcss date">{date}</p>
              <p className="t0 mediumgrey contentcss">{description}</p>
              <button className="know-more-button join-itsa-button"  style={{marginLeft:0, transform: 'none', marginTop: 10}}>
                <p className="h5 white">Know more</p>
              </button>
            </div>
            
            <div className="carousel-right">
            
              <div className="main-image">
                <img className="image-class" src={image1} alt=""/>
              </div>
            
              <div className="other-images">
                
                <div className="other-image">
                  <img className="image-class" src={image2} alt=""/>
                </div>

                <div className="other-image plus-more">
                  <img className="image-class" src={image3} alt=""/>
                  <p className="h5 primary">+ 3 more</p>
                </div>
                
              </div>
            </div>

        </div>
      </div>
    )
}

const Activities = ({
    props
}) => {

    return (
        <div className="section-container activities-container">
          
          <p className="h0 primary ta-center" style={{marginTop:100}}>
            Our Activities
          </p>

          <Carousel 
            axis="horizontal"
            showStatus={false}
            showThumbs
            showArrows
          >

            {activitiesInfo.map((item, index) => { 
              return <Card 
                title={item.title} 
                date={item.date} 
                description={item.description} 
                image1={item.image1} 
                image2={item.image2} 
                image3={item.image3} 
                index={index+1}
              />})
            }
          </Carousel>

        </div>
    )
}

export default Activities
