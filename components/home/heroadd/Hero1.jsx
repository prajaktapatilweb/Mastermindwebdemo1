import React from "react";
import { Container, Grid,Box } from "@mui/material";
import {  motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
   const textVariants={
        initial:{
            x:-500,
            opacity:0,
        },
        
        animate:{
            x:0,
            opacity:1,
            transition:{
            
                duration:1,
                staggerChildren:0.1
            }
        },
        scrollbutton:{
            opacity:0,
            y:10,
            transition:{
                duration:2,
                repeat:Infinity
            }
        }

    }
    const sliderVariants={
        initial:{
            x:0,
            
        },
        
        animate:{
            x:"-220%",
            transition:{
            repeat:Infinity,
            repeatType:"mirror",
                duration:20,
            }
        },
       

    }

  return (
    <div className="heros">
      <Container sx={{marginTop: 10}}>
        <Grid container spacing={{xs: 4, md:4}} alignItems='center' justifyContent='center'>
        <Grid item xs={12} md={6}>
      <div className="wrapper">
        <motion.div className="textcontainer" variants={textVariants}
        initial="initial"
        animate="animate"
        >
        
          <motion.h2  variants={textVariants}>Prajakta Patil</motion.h2>
          <motion.h1  variants={textVariants}>Web Developer and UI Designer</motion.h1>
          <div className="buttons">
            <motion.button  variants={textVariants}>See The Latest Work</motion.button>
            <motion.button  variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img   variants={textVariants} animate="scrollbutton" src="/scroll.png"></motion.img>
        </motion.div>
      </div>
      </Grid>
      
      <motion.div className="slidingcontainer" variants={sliderVariants}
        initial="initial"
        animate="animate">
        Writer Creator Content Influencer
      </motion.div>

    
                            <Grid item xs={12} md={6}>
                            {/* <Box className="pic"> */}

<Image src='/images/dr/drs14.jpg' width={300} height={500} alt='testimonials'></Image>

{/* </Box> */}
                            {/* <Image
              src="/images/dr/drs.jpg"
              height={600}
              width={500}
              objectFit="contain"
              // layout="responsive"
              alt="Feature img"
              style={{ borderRadius: "50%", border: "5px outset", borderImage: 'linear-gradient(to right, #3e2ecd, #2ecfab) 1' }}
              ></Image> */}
                            {/* <Image src="/images/dr/drs.jpg"   height={100}
                                    width={100}
                                    layout="responsive"
                                    objectFit="cover" 
                                    alt="abc">

                                    </Image> */}

                             
                                </Grid>
     
      </Grid>

      

      </Container>
     
    </div>
  );
}
