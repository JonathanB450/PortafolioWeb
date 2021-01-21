import React from 'react'
import Project from '../components/Project'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Mecanismos from '../images/ProjectsImg/MecanismosImg.jpg'
import Desafio from '../images/ProjectsImg/DesafioImg.png'
import Horario from '../images/ProjectsImg/HorarioImg.png'
import Ylz from '../images/ProjectsImg/Ylz.jpg'
import PlatziApi from '../images/ProjectsImg/PlatziApi.png'
import QuizApp from '../images/ProjectsImg/QuizApp.jpg'
import '../styles/Projects.css'

const Projects = () => {
    return(
        <div id="Projects_Container">
            <Menu/>
            <div className="Description FirstBlock">
                <div id="Projects_Title">
                    <h1>Proyectos</h1>
                </div>
                <div id="Services_Line"></div>
                <div id="Projects_List">
                    <div className="Projects_Line">
                        <Project img={Mecanismos} link='https://mecanismos-de-participac-e8cfd.web.app/' titulo='App Mecanismos de participación' descripcion='Aplicación web diseñada usando React Js, su propósito es el de poder ayudar a estudiantes y docentes en el proceso de reconocimiento y aprendizaje de los mecanismos de participación Colombianos.'/>
                        <Project img={Desafio} link='https://desafiodisenofundamentos.web.app/' titulo='Desafío de diseño ' descripcion='Desafío que buscaba solucionar una de las principales problemáticas de la Universidad de la Sabana.'/>
                        <Project img={Horario} link='https://horario-68070.firebaseapp.com/' titulo='Horario Semanal' descripcion='App Web para poder usar y manejar de manera más fácil mi horario semanal, compatible en dispositivos móviles. Implementa React Js y Responsive Design'/>
                    </div>
                    <div className="Projects_Line">
                        <Project img={Ylz} link='https://ylzshop.com/' titulo='Young Legendz Shop' descripcion='Tienda eCommerce desarrollada implementando un CMS el cual es Shopify, incluye sistema de manejo de productos, catálogos, blogs y sistema de pago '/>
                        <Project img={PlatziApi} link='http://platzi-api.herokuapp.com/Home?' titulo='Platzi Api' descripcion='Api de la página Platzi, esta Api permite la obtención de los cursos aprobados por cada estudiante en la plataforma, esto se hace por medio de Puppeteer como servicio de web scrapping.'/>
                        <Project img={QuizApp} link='https://quizapp-ef7a7.web.app/' titulo='Quiz App' descripcion='App Web de preguntas desarrollada en React Js y conectada a una Api, la cual permite poner a prueba los conocimientos generales de cualquier persona.'/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Projects