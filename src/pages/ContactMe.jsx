import React from 'react'
import Menu from '../components/Menu'
import Form from '../components/Form'
import Footer from '../components/Footer'
import '../styles/ContactMe.css'

const ContactMe = () => {
    return(
        <div id="ContactMe_Container">
            <Menu/>
            <div id="Form_Data">
                <div id="Formulario">
                    <div id="ContactMe_Description">
                        <h1>Contáctame</h1>
                        <div id="ContactMe_Line"></div>
                    </div> 
                    <Form/>
                </div>
                <Footer/>
            </div>
        </div>       
    )
}

export default ContactMe