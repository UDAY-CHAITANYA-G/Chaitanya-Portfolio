import React from "react";
import './blog.css';
import pic1 from '../../images/1 (1).png';
import { motion } from "framer-motion";

const Blog =() => {
    return(
        <div className="blog-div" id="Blogs">
        <h2 className="l1">Blogs</h2>
            <div className="blog-items">
            <motion.div  initial={{scale:0.8,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.3}} whileHover={{scale:1.1}} className="Blog1">
            <div className="img-div">
             <img src={pic1}></img>
            </div>
            <h2>CHARGE HERE - Website</h2>
            <p> Developed website called ”Charge Here” that offers convenient pre-booking
services for EV charging slots based on charging levels 1, 2, and 3.
• Implemented a Map feature that provides users with the shortest distance
route ...</p>
            <button className="button">Read more</button>
        </motion.div>

        <motion.div  initial={{scale:0.8,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.3}} whileHover={{scale:1.1}} className="Blog1">
            <div className="img-div">
             <img src={pic1}></img>
            </div>
            <h2>CHARGE HERE - Website</h2>
            <p> Developed website called ”Charge Here” that offers convenient pre-booking
services for EV charging slots based on charging levels 1, 2, and 3.
• Implemented a Map feature that provides users with the shortest distance
route ...</p>
            <button className="button">Read more</button>
        </motion.div>
        <motion.div  initial={{scale:0.8,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.3}} whileHover={{scale:1.1}}  className="Blog1">
            <div className="img-div">
             <img src={pic1}></img>
            </div>
            <h2>CHARGE HERE - Website</h2>
            <p> Developed website called ”Charge Here” that offers convenient pre-booking
services for EV charging slots based on charging levels 1, 2, and 3.
• Implemented a Map feature that provides users with the shortest distance
route ...</p>
            <button className="button">Read more</button>
        </motion.div>

            </div>









               
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'198rem',
                left:'10%',
                width:'25rem',
                height:'25rem',
                opacity:'20%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'178rem',
                left:'50%',
                width:'15rem',
                height:'15rem',
                opacity:'30%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'210rem',
                left:'40%',
                width:'20rem',
                height:'20rem'
                }}>
                
            </div>


        </div>
    )
}

export default Blog;