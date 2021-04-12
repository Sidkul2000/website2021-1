import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter , HashRouter, Route , Switch } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'

import About from './components/about/About'
import Activities from './components/activities/Activities'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import Sidebar from './components/sidebar/Sidebar'
import Team from './components/team/Team'
import Teams from './components/full team/Teams'
import TeamLeaders from './components/TeamLeaders/TeamLeaders'

import { ThemeProvider } from "./context/ThemeContext"

import './global.css'
import { imageAssets, videoAssets } from './info'
import { loadImage, loadVideo } from './utils'
import { ArrowUpLeft, ArrowUpRight, ExternalLink } from 'react-feather'


const App = ({}) => {

    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [videosLoaded, setVideosLoaded] = useState(false)

    


    useEffect(() => {
        Promise.all(imageAssets.map(image => loadImage(image)))
            .then(() => setImagesLoaded(true))
            .catch(err => console.log("Failed to load images", err))
            
        Promise.all(videoAssets.map(video => loadVideo(video)))
            .then(() => setVideosLoaded(true))
            .catch(err => console.log("Failed to load videos", err))
    }, [])



    return imagesLoaded && videosLoaded ? (
        
        <div>
            <ThemeProvider>
            <HashRouter>
                    {/* <Switch> */}
                       
                       



                        <Route path='/' exact={true} render={props => 
                            <Fragment>
                               <Landing {...props}/>
                               <About {...props}/>
                               <TeamLeaders/>
                               <Team {...props}/>
                               <Activities {...props}/>
                               <Footer {...props}/>
                               <Sidebar/>
                            </Fragment>
                        }/>

                        <Route path='/teams/*' exact={true} component={Teams}/>
                            
                        

                    {/* </Switch> */}
                </HashRouter>
            </ThemeProvider>
            <p className="t1 ta-center mediumgrey">Designed by <a href="https://yatishkelkar.netlify.app/" target="_blank" className="hover-color"> Yatish Kelkar <ExternalLink className="hover-color" size={14}/> </a></p>
            <p className="t1 ta-center mediumgrey" style={{paddingBottom: 40, marginTop: 10}}>Developed and maintained by ITSA Web and Tech team</p>
        </div>
    ) 
    : <div className='loading-container'>
        <div className="ball-container">
            <div className="ball"></div>
        </div>
        <p className="h2 white">Just a moment..</p>
        {/*<p className="t0 mediumgrey" style={{marginTop: 30, fontSize:20}}>We are loading the website as fast as we can &#128516;</p>*/}
    </div>
}

export default App