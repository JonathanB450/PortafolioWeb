import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import '../styles/Services.css'

const Services = () => {
    return(
        <div id="Services_Container">
            <Menu/>
            <div className="Description FirstBlock">
                <div id="Services_Description">
                    <h1>¿Qué ofrezco?</h1>
                    <p>Gracias a las tecnologías y herramientas que 
                        implemento en mi día a día, soy capaz de desarrollar 
                        y trabajar en proyectos de cualquier tipo, Por lo que 
                        puedo ofrecer 
                        los siguientes servicios adaptables 
                        para cualquier tipo de usuario.
                    </p>
                </div>
                <div id="Services_Line"></div>
                <div id="List_Container">
                    <ul>
                        <li>Desarrollo de páginas web AVANZADAS<br></br>
                        Se implementa Frontend con React JS, Backend con Node Js, bases de datos con MongoDB, SEO, lógica de programación (Funcionalidades) y diseño totalmente al gusto del cliente.
                        </li>
                        <li>Desarrollo de páginas web BASICAS<br></br>
                        Se hace uso de un CMS como puede ser WordPress o el de la preferencia del cliente, para elaborar paginas sencillas en poco tiempo y a un precio asequible.
                        </li>
                        <li>Desarrollo y asesoría para proyectos de programación.</li>
                        <li>Tutorías y cursos para principiantes en Frontend, Backend y lenguajes de programación como JavaScript, Python o Java</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Services