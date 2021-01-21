import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import '../styles/Main.css'

const Main = () => {
    return(
        <div id="Main_Container">
            <Menu/>
            <div className="Description">
                <div id="Presentation">
                    <h3>Jonathan Buitrago Roncancio</h3>
                    <div id="Line_Color"></div>
                </div>
                <div id="Title">
                    <h1>Desarrollador  <br></br> Web</h1>
                    <div className="Button_Responsive">
                        <Link to='/AboutMe'>
                            Más sobre mi
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}

export default Main