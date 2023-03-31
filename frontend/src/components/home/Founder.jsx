import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/founder.webp"

const Founder = () => {

const options = {
    initial:{
    x:"100%",
    opacity:0
    },
    whileInView:{
        x:0,
        opacity:1
    }
}
  return <section className='founder'>
    <motion.div
    {...options}
    >

        <img src={me} alt="Founder" height={200} width={200}/>
        <h3>Tanmoy Barman</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Sapiente, quibusdam. Ducimus id voluptas laborum similique.</p>
    </motion.div>
  </section>
};

export default Founder
