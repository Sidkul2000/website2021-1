import React from 'react'

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
        date:'26 January 2021',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image1: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image2: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image3: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
    {
        key : '03',
        id : '03',
        title:'Event name or slogan or activity name',
        date:'26 January 2021',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        image1: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image2: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
        image3: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
]


const Activities = ({
    props
}) => {

    return (
        <div className="section-container activities-container">
          <table class="table">
          <tr>
            <td>
              <h1>01</h1>
              <p className="h2 primary ta-left title">Event name or slogan or activity name</p>
              <p className="t0 mediumgrey contentcss">26 January 2021</p>
              <p className="t0 mediumgrey contentcss">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </td>

            <td>
            <tr>
              <td colspan = '2'>
                <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt=""/>
              </td>
            </tr>
              <tr>
                <td>
                  <img class = "small-image" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt=""/>
                </td>
                <td>
                  <img class = "small-image" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt=""/>
                </td>
              </tr>
            </td>

          </tr>
        </table>
        </div>
    )
}

export default Activities
