import React from "react";
import './Home.css'

const Home = () =>{
    return(
        <>
            <div className="container-home-page">
                <div className="left">
                    <img src="./image/sunlight.svg" alt="" className="home-image"/>
                </div>
                <div className="right">
                    <h1>Welcome to weather apps</h1>
                    <p>Type Your City Name...</p>
                </div>
            </div>
        </>
    )
}

export default Home;