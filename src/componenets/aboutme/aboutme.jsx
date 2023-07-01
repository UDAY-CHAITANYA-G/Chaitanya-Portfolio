import React from "react";
import './aboutme.css';
import pic from '../../images/pic1.jpg';
import { motion } from "framer-motion";


const Aboutme= () =>{
    
    return(
        <div className="aboutme" id="Aboutme">
           <div className="info">
                <motion.div initial={{x:200,opacity:0.4}}
                     whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}}  className="title">
                    <h2>About</h2><h2 className="me">Me</h2>
                </motion.div>
                <div className="items">
                    <motion.img initial={{x:-200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} src={pic} />
                    <motion.p
                     initial={{x:200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} >I am a passionate and dedicated frontend developer based in Andhra Pradesh, India. With a strong focus on creating exceptional user experiences, I possess the skills necessary to build great websites. My goal is to combine aesthetics with functionality, delivering engaging and intuitive interfaces.</motion.p>
                </div>
            </div>

          
            <div className="title3">
                    <h2>My</h2><h2 className="skill">Skill</h2>
            </div>
            <div className="skills">
            <div className="row1">
            <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:.3,duration:0.5}}   className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                              HTML
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle  cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>

                <motion.div   initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.4,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                               CSS
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle className="circle2" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>


                <motion.div  initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.5,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number1">
                             JavaScript
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle  className="circle3" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>

                <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.6,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                              React
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle className="circle4" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>
            
            
            
            <motion.div  initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.7,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                             Python
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle  className="circle5" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>
                </div>
                <div className="row1">
                <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.8,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                              Node.js
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle className="circle6" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>

                
                <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:.9,duration:0.5}}   className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number1">
                             MongoDB
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle  className="circle7" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>

                <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:1,duration:0.5}}  className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                             SQL
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle className="circle8" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>
                
                <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}}  transition={{delay:1.1,duration:0.5}} className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                             Express
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle  className="circle7" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>
            
                 <motion.div initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:1.2,duration:0.5}}  className="skill1">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                             DSA
                            </div>  
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color='rgb(227, 106, 14)' />
                                <stop offset="100%" stop-color="rgb(240, 173, 121)" />
                            </linearGradient>
                        </defs>
                        <circle className="circle10" cx="80" cy="80" r="45" stroke-linecap="round" />
                    </svg>
                </motion.div>

            </div>
                
                
            </div>

            <div className="box">
            </div>

            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'48rem',
                left:'29%',
                width:'13rem',
                height:'13rem'
                }}>

            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'68rem',
                left:'39%',
                width:'15rem',
                height:'15rem'
                }}>

            </div>

        </div>
   
    )
    
}



export default Aboutme;