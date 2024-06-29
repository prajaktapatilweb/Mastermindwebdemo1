import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
import { Grid, Typography } from '@mui/material';
const Drgalleryitem1 = ({ item }) => {
    return (
        <>  
        <Box sx={{
    px: 1,
    py: 1,
  }}>
         <Box sx={{

backgroundColor: '#e1e8f0',
border:'1px solid #104099'
}}>     
            <div class="member" >
              <div class="member-img">
              <Image src={item.images} height={100} width={100}
          layout='responsive' objectFit='contain' alt={'DentalService' + item.id} />
               
              </div>
              <div class="member-info" style={{padding:15}}>
                <Typography variant='h6'  sx={{fontWeight:100}}>{item.position}</Typography>
                <Typography variant='h2' color='primary.dark'>{item.name}</Typography>
                <p>{item.info}</p>
              </div>
            </div>
          </Box>
           </Box>
        </>
        );
};
export default Drgalleryitem1;
