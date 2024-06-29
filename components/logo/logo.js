import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const Logo = ({ onClick, variant }) => {
  return (<Box onClick={onClick} sx={{ py: 2 }}>
    <img src="/images/logo1.jpg" width="200px" ></img>

    {/* <Typography variant="h4" component="h1" sx={{ fontWeight: 700, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}>
        Course<span>space</span>
      </Typography> */}
  </Box >);
};
Logo.defaultProps = {
  variant: 'primary',
};
export default Logo;
