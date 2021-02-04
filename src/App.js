import React, { Fragment } from 'react'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

import About from './components/about/About'
import Activities from './components/activities/Activities'
import Footer from './components/footer/Footer'
import Landing from './components/landing/Landing'
import Sidebar from './components/sidebar/Sidebar'
import Team from './components/team/Team'

import { ThemeProvider } from "./context/ThemeContext"

const App = ({}) => {
    return (
        <div>
            <ThemeProvider>
                <BrowserRouter>
                    <Switch>
                       
                       <Route path="/" render={props => 
                           <Fragment>
                               <Landing {...props}/>
                               <About {...props}/>
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
    )
}

export default App