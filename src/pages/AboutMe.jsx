import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import QuoteL from '../images/QuoteL.svg'
import QuoteR from '../images/QuoteR.svg'
import Perfil from '../images/Perfil.jpg'
import '../styles/AboutMe.css'

const AboutMe = () => {
    return(
        <div id="AboutMe_Container">
            <Menu/>
            <div className="Description FirstBlock">
                <div id="Quote_Container">
                    <img src={QuoteL} alt="" className='Quotes'/>
                    <p>“La vida es una eterna solución de problemas” <br></br>
                        - John Jairo Buitrago Hincapie
                    </p>
                    <img src={QuoteR} alt="" className='Quotes'/>
                </div>
                <div id="Quote_Line"></div>
                <div id="AboutMe_Description">
                    <div id="AboutMe_Img">
                        <img src={Perfil} alt=""/>
                    </div>
                    <div id="AboutMe_Text">
                        <p>Soy estudiante de segundo semestre de la universidad de la sabana, tengo experiencia con el desarrollo frontend y algo de backend, mis énfasis principales son: HTML, JS, CSS, PHP, React Js, Node Js y WordPress.  Hago uso de herramientas como Visual Studio Code, Photoshop y GitHub para poder desarrollador mis proyectos.</p>
                    </div>
                </div>
                <div id="AboutMe_BackgroundImg"></div>
                <Footer/>
            </div>
        </div>
    )
}

export default AboutMe
