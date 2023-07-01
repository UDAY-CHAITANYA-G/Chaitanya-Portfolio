import React from "react";
import './card.css'

const Card=({icon,heading})=>{
    return(
        <div className="card">
            <img src={icon} />
            <span>{heading}</span>

        </div>
    )
}

export default Card;