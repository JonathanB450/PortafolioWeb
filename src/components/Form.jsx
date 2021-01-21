import React from 'react'
import {Email} from '../modules/smtp'
import LoadingModal from './LoadingModal'
import swal from 'sweetalert';
import '../styles/Form.css'

class Form extends React.Component{
    state = {
        emailIsSending: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    enviarEmail = async () => {    
                let nombre = this.state.nombre
                let email = this.state.email
                let telefono = this.state.telefono
                let description = this.state.description
                if (nombre !== undefined && email !== undefined && description !== undefined && telefono !== undefined) {
                    this.setState({
                        emailIsSending: true
                    })  
                    await fetch(`https://correos-jonathan.herokuapp.com/send-email?name=${this.state.nombre}&tel=${this.state.telefono}&email=${this.state.email}&message=${this.state.description}`, {
                        method: 'POST',
                    })   
                    .then(res  => {
                        this.setState({
                            emailIsSending: false
                        })
                        if (res.status === 200) {
                            this.setState({
                                description: '',
                                email: '',
                                nombre: '',
                                telefono: ''
                            })
                            this.setState({
                                description: undefined,
                                email: undefined,
                                nombre: undefined,
                                telefono: undefined
                            })
                            swal("Listo!", "Te contactare en un momento", "success");
                            }
                        else{
                            swal("Oops!", "Algo ocurrió, intenta nuevamente", "error");
                        }
                    })
                }
                else{
                    swal("Oops!", "Algo falta en el formulario, revisa de nuevo ", "info");
                }
                
        
    }

    render(){
        return(
        <div id="Form_Container">
            <script src="https://smtpjs.com/v3/smtp.js"></script>
                <div id="NombreApellido" className='Form_Item'>
                    <h3>Nombre y apellido</h3>
                    <input onChange={this.handleChange} name='nombre' type="text" id='Nombre' value={this.state.nombre} required/>
                </div>
                <div id="NombreApellido" className='Form_Item'>
                    <h3>Numero de contacto<br></br>(Con código de país)</h3>
                    <input onChange={this.handleChange} name='telefono' type="text" id='Tel' value={this.state.telefono} required/>
                </div>
                <div id="CorreoElectronico" className='Form_Item'>
                    <h3>Correo electrónico</h3>
                    <input onChange={this.handleChange} name='email' type="email" id='Correo' value={this.state.email} required/>
                </div>
                <div id="Descripcion" className='Form_Item Item_Description'>
                    <h3>Descripción</h3>
                    <textarea onChange={this.handleChange} name='description' type="text" id='Descripcion' value={this.state.description} required/>
                </div>
                <div id="Send_Button" className='Form_Item Item_Button'>
                    <input onClick={this.enviarEmail} name='enviar' type="button" value='Enviar' required/>
                </div>
                <LoadingModal state={this.state.emailIsSending}/>
        </div>
        )
    }
}


export default Form