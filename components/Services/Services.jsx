import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import Image from "next/image";

export default function Services() {
  var Details = [
 
    {
        title: "Branding",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    },
    {
      title: "Development",
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  },
  {
    title: "marketing",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
},
{
  title: "Application",
  desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
},
  

];

  const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    
    animate:{
        x:0,
        opacity:1,
        y:0,
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
  return (
<>    
<Hidden smDown>

<div class="containers">

        {/* <hr/> */}
        <span> We focus on helping your brand grow <br></br>
          and move forward</span>
        <hr/>
    </div>
    </Hidden>

    <motion.div className="services" variants={variants} initial='initial' animate='animate'>
        
        {/* <Container> */}

       
    
      <motion.div className="titlecontainer" variants={variants}> 
      <Grid container spacing={2} alignItems='center' justifyContent='center' textAlign='center'>
        <Grid item xs={12} sm={12} md={5} sx={{textAlign:'center',mt:3}}>
<Box sx={{textAlign:'center',float:'right'}}>
  <Hidden smDown>
          <Image src="/people.webp" alt="" width={100} height={100} ></Image>
          </Hidden>
          </Box>
          </Grid>
        <Grid item xs={12} sm={12} md={7}>

          <Typography component='h1' sx={{float:{xs:'center',sm:'center',md:'left'},fontSize:{xs:50,sm:40,md:80}, mt:{xs:-1,sm:-1,md:0}}}>
            <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={8}>

          <Typography component='h1' sx={{float:{xs:'center',sm:'center',md:'right'},fontSize:{xs:50,sm:40,md:80}}}>
          <motion.b whileHover={{color:'orange'}}>For Your</motion.b> Business
          </Typography>
          </Grid>
        <Grid item xs={12} sm={12} md={4}>

          <Typography component='button' sx={{float:{xs:'center',sm:'center',md:'left'}}}>What We Do?</Typography>
          </Grid>
          
      </Grid>
     
      </motion.div>
      <br/>
      <motion.div className="services" variants={variants} initial='initial' whileInView='animate'>

      <Container>
        <Grid container>
        {Details.map((item, i) => (
        <Grid item xs={12} sm={12} md={3}>

        <motion.div
      className="hover-container"
      whileHover={{ backgroundColor: 'lightgrey', color: 'black' }}
      style={{ padding: '20px', border: '0.5px solid gray' }}
    >
        <Grid item xs={12} sm={12} md={12} sx={{ padding: '5px' }}>
        
          <Box key={i} textAlign='center'>
          <h2>{item.title}</h2>
          <p style={{textAlign:'left '}}>
           {item.desc}
          </p>
          <br/>
          <button style={{borderRadius:5,height:'auto',padding:2,width:'80%',fontSize:20}}>Go</button>
          </Box>
          </Grid>
        </motion.div>
        </Grid>
        ))}


</Grid>
</Container>
</motion.div>
      {/* </Container> */}
    </motion.div>
    </>

  );
}
