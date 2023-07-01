import React from "react";
import './services.css';
import Card from "../card/card";
import python from '../../images/python-logo-60.png';
import development from '../../images/code-alt-regular-60.png';
import { motion } from "framer-motion";

const Services= () => {
    return(
        <div className="services" id='Services'>
            <div className="ser">
                <h2 >Services</h2>
            </div>
            <div className="boxs">
                 <motion.div initial={{x:-200}}
            whileInView={{ x:0}}
            transition={{duration:1.5}} className="box1"></motion.div>
                <motion.div initial={{x:200}}
            whileInView={{ x:0}}
            transition={{duration:1.5}} className="box1"></motion.div>
            </div>
            <div className="cards">
            <motion.div initial={{x:-200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="card1">
                <Card 
                    icon={python}
                    heading= {'Programmer'}
                />
            </motion.div>
            <motion.div initial={{x:200,opacity:0.4}}
            whileInView={{ x:0,opacity:100}}
            transition={{duration:1.5}} className="card2"> 
                <Card className='c2' 
                    icon={development}
                    heading= {'    Developer'}
                />
            </motion.div>

            </div>

            
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'88rem',
                left:'-10%',
                width:'25rem',
                height:'25rem',
                opacity:'40%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'88rem',
                left:'40%',
                width:'20rem',
                height:'20rem',
                opacity:'30%'
                }}>
                
            </div>
            <div className="blur1" style={{
                background: ' #F5C32C',
                top:'110rem',
                left:'50%',
                width:'15rem',
                height:'15rem'
                }}>
                
            </div>

        
        
        </div>

        
    )
}

export default Services;