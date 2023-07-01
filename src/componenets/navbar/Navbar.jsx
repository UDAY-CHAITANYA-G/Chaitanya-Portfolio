import React from "react";
import './Navbar.css';
import { Link } from "react-scroll";

const Navbar = () =>{
    return(
        <div className="n-wrapper" id="home">
            <div className="n-left">
                <div className="n-name">Chaitanya</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link spy={true} to='home' smooth={true} activeClass="activeClass"><li>Home</li></Link>
                        <Link spy={true} to='Aboutme' smooth={true} activeClass="activeClass"><li>About Me</li></Link>
                        <Link spy={true} to='Services' smooth={true} activeClass="activeClass"><li>Services</li></Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass"><li>Portfolio</li></Link>
                        <Link spy={true} to='Blogs' smooth={true} activeClass="activeClass"><li>Blogs</li></Link>
                       
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}  activeClass="activeClass" > <button className="button n-button">
                    Contact Me               </button> </Link>
            </div>
        </div>
    )
}

export default Navbar;
