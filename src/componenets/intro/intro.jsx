import React from 'react';
import './intro.css'; 
import Github from '../../images/github-logo-24.png';
import Linkedin from '../../images/linkedin-square-logo-24.png';
import insta from '../../images/instagram-alt-logo-24.png';
import twitter from '../../images/twitter-logo-24.png';
import pic from '../../images/pic.jpeg';
import {motion} from 'framer-motion';


const Intro = () => {

    const transition ={ duration: 2,type:'spring'}

    return(
        <div className="intro" id='Home'>
            <div className="i-left">
                <div className="i-name">
                    <h3>Hello, It's Me</h3>
                    <motion.h1 
                   
                    initial={{x:-200}}
                    whileInView={{ x:0,opacity:100}}
                    transition={{duration:1}}>UDAY CHAITANYA</motion.h1>
                    <p className="i"><h2 style={{color:'white'}}>A</h2><motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:4}}  > Programmer</motion.h2><h2 style={{color:'white'}}>|</h2><motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:4}} >  Developer</motion.h2></p>
                </div>
                <div className="i-icones">
                    <a className="link" href="https://twitter.com/CHAITANYA420201?t=5xs25DvO9B94PWK50ZdCyw&s=09" ><motion.img  initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.3,duration:0.5}} whileHover={{scale:1.1}}  src={twitter}></motion.img></a>
                    <a className="link" href="https://github.com/UDAY-CHAITANYA-G" ><motion.img initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.4,duration:0.5}}  whileHover={{scale:1.1}}   src={Github}></motion.img></a>
                    <a className="link" href="https://www.linkedin.com/in/uday-chaitanya-c223511/" ><motion.img  initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.5,duration:0.5}}  whileHover={{scale:1.1}}   src={Linkedin}></motion.img></a>
                    <a className="link" href="https://www.instagram.com/chaitany_0000/" ><motion.img initial={{scale:0,opacity:0.4}} whileInView={{scale:1, opacity:1}} transition={{delay:0.6,duration:0.5}} whileHover={{scale:1.1}}  src={insta}></motion.img></a>
                </div>
                <a className='aaa' href="https://drive.google.com/file/d/144EDNjJ1LCwfSg5LiK6fvVgvVALosJfB/view?usp=sharing"><button  className="button i-button">Resume</button></a>
            </div>
            
            <div className="i-right ">
               <motion.img initial={{left:'46%'}}
                    whileInView={{left:'18%'}}
                    transition={transition} className="pic" src={pic} />
            </div>
            <div className="blur1" style={{background: ' #F5C32C',
            width:'20rem',
            height:'20rem',
            left:'-50%'}}></div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'4rem',
                left:'25%',
                width:'12rem',
                height:'12rem'
                }}>

            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'26rem',
                left:'35%',
                width:'10rem',
                height:'10rem',
                opacity:'60%'
                }}>

            </div>
        </div>
  
    )
} 

export default Intro;
