import React from "react";
import './TempSection.css';

const TempSection = (props) => {
    const icons = props.onDataHandler.weather && props.onDataHandler.weather[0].icon
    const image = `http://openweathermap.org/img/wn/${icons}@2x.png`
    // /image/main-image.svg with hard code old image 

    return (
        <>
            {
                props.onErrorHandler ? 'error' :
                    <>
                        {/* tempraturs and otehr section code start */}
                        <div className="container">
                            <div className="imgae-contaienr">
                                <img src={image} alt="" className="main-image" />
                                <div className="description-container">
                                    <p>
                                        {
                                            props.onDataHandler.weather && props.onDataHandler.weather[0].description
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="temp-container">
                                <p>{Math.round(props.onDataHandler.main && props.onDataHandler.main.temp)}°C</p>
                                <div className="city-name-and-contry">
                                    <p className="city-name color">{props.onDataHandler.name}</p>
                                    <p className="contry-name">{props.onDataHandler.main && props.onDataHandler.sys.country}</p>
                                </div>
                                <div className="feel-like-container">
                                    Feel like {Math.round(props.onDataHandler.main && props.onDataHandler.main.feels_like)}°C
                                </div>
                                <div className="max-min-contaienr">
                                    <div className="max">Max {Math.round(props.onDataHandler.main && props.onDataHandler.main.temp_max)}°C</div>
                                    <div className="min">Min {Math.round(props.onDataHandler.main && props.onDataHandler.main.temp_min)}°C</div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default TempSection;