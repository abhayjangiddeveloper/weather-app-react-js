import React from "react";
import './List.css'

const List = (props) => {
    return (
        <>
            <div className="container-list">
                <div className="image-container-list">
                    <img src={props.image} alt="" className="list-image" />
                </div>
                <div className="heading-list-and-value">
                    <div className="heading-list"><p>{props.heading}</p></div>
                    <div className="value-list"><p>{props.value}</p></div>
                </div>
            </div>
        </>
    )
}

export default List;