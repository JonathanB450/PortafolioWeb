import React from 'react'
import img from '../images/Triangulos.png'
import '../styles/Project.css'

class Project extends  React.Component{
    render(){
        return(
            <div className="Project_Item">
                <a href={this.props.link} target="blank">
                    <img src={this.props.img} alt=""/>
                    <h1>{this.props.titulo}</h1>
                    <p>{this.props.descripcion}</p>
                </a>
            </div>
        )
    }
}

export default Project