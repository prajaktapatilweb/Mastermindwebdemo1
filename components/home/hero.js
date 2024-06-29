import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import { PlayArrow } from '@mui/icons-material'
import Hidden from '@mui/material/Hidden';
import Contact from './Contact'
import Herocontact from './Herocontacts'
import Herocontacts from './Herocontacts'
import Countdown from './Countdown'
import Image from 'next/image'
import { motion } from 'framer-motion'


const HomeHero = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
    
     {/* <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className='shape shape-style-u1 shape-dark'>
        <span className='span-150' />
        <span className='span-75' />
        <span className='span-50' />
        <span className='span-75' />
        <span className='span-200' />
        <span className='span-150' />
      </div> */}
      {/* <Box sx={{background:'#104099',height:'auto'}} alignItems='center' justifyContent='center' textAlign='center'> */}
        {/* <Container>
          <Grid container alignItems='center' justifyContent='center' textAlign='left' sx={{ zIndex: 1 ,position:'relative'}}>
            <Grid item xs={12} md={6} sx={{p:5,}}>
              <Box>
                <Typography variant='p' sx={{ color: '#00af89', fontSize: 28}} >
A Reason 
              

                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    // width: { md: 850 },
                    position: 'relative',
                    fontSize: { xs: 35, md: 40, lg: 45 },
                    mt:-2,
                    mb: { xs: 3, sm: 2 },
                    letterSpacing: 1,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                To Smile

                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    color:'white',
                    mb: { xs: 3, sm: 5 },

                    // '& svg': {
                    //   position: 'absolute',
                    //   top: -7,
                    //   right: -20,
                    //   width: { xs: 22, md: 27 },
                    //   height: 'auto',
                    // },
                  }}
                >
Visit Dr. Akshay's DentAvenue, a leading dental clinic in Chembur. Our compassionate team and cutting-edge techniques are dedicated to brightening your smile and lighting up every room.
              
                </Typography>{' '}
                
                <Box sx={{ '& button': { mr: 2 } }}>


                  <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350} >

                    <StyledButton  size="large"   sx={{ mb: { xs: 3, sm: 0, md: 0 },mt:3,background:'primary.light', fontSize: 17, border: "0px solid", borderRadius: 10, color: 'white' }}>
                      Watch Video
                    </StyledButton>
                  </ScrollLink>

                </Box>


              </Box>

            </Grid>
            <Grid item xs={12} md={6}> */}
            {/* <div className={classes.imgContainer}> */}
    {/* <img src='/images/main4.png'  alt="gradient" /> */}
    {/* <motion.img
       initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         type: "smooth",
         repeatType: "mirror",
         duration: 2,
         repeat: Infinity,
       }}
       src={'/images/main4.png'}
       alt="floater"
    /> */}
{/* </div> */}
{/* <motion.img
       initial={{ y: -10 }}
       animate={{ y: 10 }}
       transition={{
         type: "smooth",
         repeatType: "mirror",
         duration: 2,
         repeat: Infinity,
       }}
       src={'/images/main6.png'}
       width='100%'
       height='100%'
       className='pngback'
       alt="floater"
    > */}
              <Image src='/images/main6.png' alt='' width={500} height={100} style={{marginBottom:-10}}
               objectFit='contain' className='pngback' layout='responsive'/>
             {/* </motion.img> */}
              {/* </Grid>
          </Grid>
        </Container> */}

      {/* </Box> */}
      {/* </Grid> */}
    </>
  )
}
export default HomeHero