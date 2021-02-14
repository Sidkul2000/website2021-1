import React, { Fragment } from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'
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

const App = ({}) => {
    return (
        // <Scrollbars 
        //   style={{width:'100vw', height:'100vh', backgroundColor: 'transparent'}}
        //   autoHide
        //   autoHideDuration={1000}
        //   autoHideTimeout={800}
        //   renderThumbVertical={({ style, ...props }) =>
        //   <div {...props} className="scrollbar" style={{ ...style}}/>
        //   }
          
        // >
        <div>
            <ThemeProvider>
                <BrowserRouter>
                    <Switch>
                       
                       <Route path="/" exact render={props => 
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

                       <Route path="/teams" exact>
                        <Teams />
                       </Route>

                       <Route path="*" render={props => 
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

                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
        // </Scrollbars>
    )
}

export default App