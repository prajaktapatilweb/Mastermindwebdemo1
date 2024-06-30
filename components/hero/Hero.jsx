import React from "react";
// import "./hero.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
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
      <Container>

        <Grid container>
        <Grid item xs={12} sm={12} md={6}>
        <motion.div className="textcontainer" variants={textVariants}
        initial="initial"
        animate="animate"
        >
        
          <motion.h2   variants={textVariants}>Prajakta Patil</motion.h2>
          <motion.div>

          <Typography variant="h1" component='h1'  sx={{fontFamily:'DM Sans, sans-serif',
            fontSize:{xs:'50px',sm:'60px',md:'70px'}}} variants={textVariants}>Web Developer and UI Designer</Typography>
          </motion.div>
          <Box className="buttons">
            <motion.button  variants={textVariants} style={{padding: '20px',
          border: '1px solid white',
          borderRadius: '10px',
          backgroundColor: 'transparent',
          color: 'white',
          marginRight:'20px',
          cursor: 'pointer',
          fontWeight: 300
          }}>See The Latest Work</motion.button>
            <motion.button  variants={textVariants}>Contact Me dj</motion.button>
          </Box>
          <motion.img   variants={textVariants} animate="scrollbutton" src="/scroll.png" style={{marginBottom:20}}></motion.img>
        </motion.div>
      </Grid>
      
      <motion.div className="slidingcontainer" variants={sliderVariants}
        initial="initial"
        animate="animate">
        Writer Creator Content Influencer
      </motion.div>
      <Grid item xs={12} sm={12} md={6}>
        <Image src="/images/hero1.png" alt="abc" layout="responsive" width={100} height={100} objectFit="contain"></Image>
      </Grid>
      </Grid>
      </Container>

      </div>
     
  );
}
