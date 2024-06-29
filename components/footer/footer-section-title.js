import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const FooterSectionTitle = ({ title }) => {
    return (<Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 2,
        }}>
      <Typography component="p" variant="h5" sx={{ color: 'primary.contrastText', fontWeight: '700' }}>
        {title}
      </Typography>
    </Box>);
};
export default FooterSectionTitle;
