import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from '../pages/Main'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
import '../styles/Animation.css'
import '../container/App.css'

const App = () => {
    return(
        <div id="App_Container">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/AboutMe' component={AboutMe}/>
                    <Route path='/ContactMe' component={ContactMe}/>
                    <Route path='/Services' component={Services}/>
                    <Route path='/Projects' component={Projects}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App