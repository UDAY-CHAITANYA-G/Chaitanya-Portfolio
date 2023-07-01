import React from "react";
import './portfolio.css';
import pic1 from '../../images/1 (1).png';
import pic2 from '../../images/1 (2).png';
import pic3 from '../../images/1 (3).png';
import link from '../../images/link-external-regular-24.png';
import { motion } from "framer-motion";



const Portfolio =()=>{
    return(
        <div className="portfolio" id="Portfolio">
           <h2>Portfolio</h2>

          <div className="portfolio-container">
                <motion.div initial={{x:-200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1' src={pic1}></img>
                    <div className="portfolio-layer">
                        <span>Charge Here</span>
                        <p>EV charging station website. provide preslot bookings and short distance route to user to station ...</p>
                        <a href=""><img className='img2'  src={link}></img></a>
                    </div>
                </motion.div>  

                <motion.div initial={{y:-200,opacity:0.4}}
            whileInView={{ y:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1'  src={pic2}></img>
                    <div className="portfolio-layer">
                        <span>Temperature Converter</span>
                        <p> Converte temperature inko kelvin,celsius and fahrenheit degrees</p>
                        <a href=""><img className='img2'  src={link}></img></a>
                    </div>
                </motion.div>  

                <motion.div initial={{x:200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1'  src={pic3}></img>
                    <div className="portfolio-layer">
                        <span>TO-DO list</span>
                        <p>user friendly ..  easly can user manage to do list.</p>
                        <a href=""><img className='img2' src={link}></img></a>
                    </div>
                </motion.div>  


                <motion.div initial={{x:-200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1' src={pic1}></img>
                    <div className="portfolio-layer">
                        <span>Charge Here</span>
                        <p>EV charging station website. provide preslot bookings and short distance route to user to station ...</p>
                        <a href=""><img className='img2'  src={link}></img></a>
                    </div>
                </motion.div>  

                <motion.div initial={{y:200,opacity:0.4}}
            whileInView={{ y:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1'  src={pic2}></img>
                    <div className="portfolio-layer">
                        <span>Temperature Converter</span>
                        <p> Converte temperature inko kelvin,celsius and fahrenheit degrees</p>
                        <a href=""><img className='img2'  src={link}></img></a>
                    </div>
                </motion.div>  

                <motion.div initial={{x:200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="portfolio-box">
                    <img className='img1'  src={pic3}></img>
                    <div className="portfolio-layer">
                        <span>TO-DO list</span>
                        <p>user friendly ..  easly can user manage to do list.</p>
                        <a href=""><img className='img2' src={link}></img></a>
                    </div>
                </motion.div>
          </div>
           
           














            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'120rem',
                left:'20%',
                width:'25rem',
                height:'25rem',
                opacity:'30%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'160rem',
                left:'-10%',
                width:'25rem',
                height:'25rem',
                opacity:'30%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'148rem',
                left:'40%',
                width:'20rem',
                height:'20rem',
                opacity:'30%'
                }}>
            </div>
        </div>
    )
}

export default Portfolio;