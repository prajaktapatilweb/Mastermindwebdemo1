import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box sx={{
      px: 1,
      py: 1,
    }}>
      <Box sx={{
        p: 1,
        // backgroundColor: 'background.paper',
        borderRadius: 4,
        transition: (theme) => theme.transitions.create(['box-shadow']),
        '&:hover': {
          boxShadow: 2,
          [`& .${iconButtonClasses.root}`]: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: 2,
          },
        },
      }}>
        <Box>
          {/* <Box sx={{
          minHeight: '400',
          maxHeight: 'auto',
          lineHeight: 2,
          overflow: 'hidden',
          // borderRadius: 3,
          // height: 400,
          // objectFit: 'contain',
          position: 'relative'
        }}> */}

          <Image
            alt={'Course ' + item.id}
            src={`/images/patients/patient${item}.jpg`}
            width={100}
            height={100}
            layout='responsive'></Image>
          {/* <Image
            alt={'Course ' + item.id}
            src={`/images/patients/patients${item}.jpeg`}
            maxWidth="100"
            width="400"
            height="400" */}
          {/* // src={item.cover}
          // layout='fill'
          // objectFit='contain'
          /> */}


          {/* <Image src={item.cover} width={0} height={0} layout='responsive' sizes='100vw' objectFit='cotain' style={{ width: '100%', height: 'auto' }} alt={'Course ' + item.id} /> */}
          {/* <Image src={item.cover} width={100} height={100} layout='responsive' alt={'Course ' + item.id} /> */}
        </Box>
        {/* <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 2, height: 56, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly/>
            <Typography component="span" variant="h5">
              ({item.ratingCount})
            </Typography>
          </Box>
        </Box> */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="primary.main">
              {'$' + item.price}
            </Typography>
            <Typography variant="h6">/ course</Typography>
          </Box>
          <IconButton color="primary" sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}>
            <ArrowForward />
          </IconButton>
        </Box> */}
      </Box>
    </Box>);
};
export default PhotoCardItem;
