import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { iconButtonClasses } from '@mui/material/IconButton';
import { Avatar, Card } from '@mui/material';
const CourseCardItem = ({ item }) => {
  return (
   
  <Box sx={{
    px: 1,
    py: 1,
  }}>
    
<Card sx={{ p: 3,height:'100%' }}>
                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, backgroundColor: "primary.main", padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>

                                    <Typography variant='h4' sx={{ py: 2 ,textAlign:'center',color: "primary.dark"}}> {item.title} </Typography>
                                    <Typography variant='body1' sx={{ textAlign: 'justify' }}>
                                        {item.info}
                                    </Typography>

                                </Card>
    
    
  </Box>
  
 
  );
};
export default CourseCardItem;
