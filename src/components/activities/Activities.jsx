import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './activities.css'


const activitiesInfo = [
    {
        key : '01',
        id : '01',
        title:'Event name or slogan or activity name',
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


class Card extends React.Component {
  render() {
    return(
      <div className="card-container">
          <table class="table">
          <tr>
            <td>
              <h1 >01</h1>
              <p className="h2 primary ta-left title">{this.props.title}</p>
              <p className="t0 mediumgrey contentcss">{this.props.date}</p>
              <p className="t0 mediumgrey contentcss">{this.props.description}</p>
            </td>
            <td>
            <tr>
              <td colspan = '2'>
                <img className="image-class" src={this.props.image1} alt="" style={{"border-radius":"20px"}}/>
              </td>
            </tr>
              <tr>
                <td>
                <img className="image-class" src={this.props.image2} alt="" style={{"border-radius":"20px"}}/>
                </td>
                <td>
                <img className="image-class" src={this.props.image3} alt="" style={{"border-radius":"20px"}}/>
                </td>
              </tr>
            </td>

          </tr>
        </table>
      </div>
    )
    
  }
}

const Activities = ({
    props
}) => {

    return (
        <div className="section-container activities-container">
          <p className="h0 primary ta-center " style={{marginTop:100}}>
            Our Activities
          </p>
          <Carousel axis="vertical" >
          {activitiesInfo.map((item) => <Card title={item.title} date={item.title} description={item.description} image1={item.image1} image2={item.image2} image3={item.image3} />)}
          </Carousel>
        </div>
    )
}

export default Activities
