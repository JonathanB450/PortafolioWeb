import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Menu.css'

const Menu = () => {
    return(
        <div id="Menu_Container">
            <div className="Button">
                <Link to='/'>
                    Home
                </Link>
                <div className="Menu_Line"></div>
            </div>
            <div className="Button">
                <Link to='/AboutMe'>
                    ¿Quién soy?
                </Link>
                <div className="Menu_Line"></div>
            </div>
            <div className="Button">
                <Link  to='/Services'>
                    Servicios
                </Link>
                <div className="Menu_Line"></div>
            </div>
            <div className="Button">
                <Link to="/Projects">
                    Proyectos
                </Link>
                <div className="Menu_Line"></div>
            </div>
            <div className="Button Contact">
                <Link to='/ContactMe'>
                    Contáctame
                </Link>
            </div>   
        </div>
    )
}
export default Menu