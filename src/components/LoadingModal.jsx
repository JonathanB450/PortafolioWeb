import React from 'react'
import ReactDom from 'react-dom'
import '../styles/LoadingModal.css'

const LoadingModal = ({state}) => {
    if (!state) return null
    return (
        ReactDom.createPortal(
            <div className="Loading_Modal">
                <div className="Loading_Container">
                    <div class="lds-dual-ring"></div>
                    <h3>El email se esta enviando, espera un momento.</h3>
                </div>
            </div>
        , document.getElementById('modal'))
    )
}

export default LoadingModal
