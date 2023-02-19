import React from "react";
import './Error.css'

const Error = () =>{
    return(
        <>
            <div className="container-error-page">
                <div className="error-image">
                    <img src="./image/404.svg" alt="" className="error-image"/>
                </div>
                <div className="error-warning">
                    <p>Opps!</p>
                </div>
            </div>
        </>
    )
}

export default Error;