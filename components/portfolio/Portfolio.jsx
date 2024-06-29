import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Container, Grid } from '@mui/material';
import Image from 'next/image';


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: '/images/cards/portfolio1.png',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis consectetur. Beatae aspernatur, sit ratione cum rerum qui quo, natus pariatur porro dolores illo repellat amet inventore suscipit mollitia officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Next.js App",
        img: '/images/cards/portfolio3.png',

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis consectetur. Beatae aspernatur, sit ratione cum rerum qui quo, natus pariatur porro dolores illo repellat amet inventore suscipit mollitia officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Music app",
        img: '/images/cards/portfolio2.png',


        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis consectetur. Beatae aspernatur, sit ratione cum rerum qui quo, natus pariatur porro dolores illo repellat amet inventore suscipit mollitia officiis."
    },
    {
        id: 4,
        title: "Vanilla Commerce",
        img: '/images/cards/portfolio7.png',

        
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis consectetur. Beatae aspernatur, sit ratione cum rerum qui quo, natus pariatur porro dolores illo repellat amet inventore suscipit mollitia officiis."
    }

];
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50])

    return (
        <section>
            <Container ref={ref}>
                {/* <div className="container"> */}
                <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
                        <Image src={item.img} alt='' width={100} height={100} layout='responsive' objectFit='contain'></Image>
                    </Grid>
        <Grid item xs={12} sm={12} md={6}>

                    <motion.div className="textcontainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                    </Grid>
                    </Grid>
                {/* </div> */}
            </Container>
            
        </section>
    );
};

export default function Portfolio() {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start end","end start",]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
    
            <div className='portfolio' ref={ref}>
                <div className='progress'>
                    <h1>Featured Works</h1>
                    <motion.div style={{ scaleX }} className='progressBar'>

                    </motion.div>
                </div>
                {items.map((item) => (
                    <Single item={item} key={item.id}></Single>
                ))}
            </div>
        
    )
}
