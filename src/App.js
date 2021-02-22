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

                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
        // </Scrollbars>
    )
}

export default App