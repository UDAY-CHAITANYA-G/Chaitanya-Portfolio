import React from "react";
import "./footer.css";
import pic1 from '../../images/up-arrow-square-solid-24.png';

const Footer =() =>{
    return(
        <div className="Footer">
        <div className="l-Footer">
            <p>Copyright & copy; 2023 by chaitanya All Rights Reserved.</p>   
        </div>
        <div className="arrow">
            <a href="#home"><img src={pic1} /></a>
        </div>

        </div>
    )
}

export default Footer;