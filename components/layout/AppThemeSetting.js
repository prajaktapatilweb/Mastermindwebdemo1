import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { orange } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppScrollbar from './AppScrollbar';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import Image from 'next/image';
import { Link } from '@mui/material';
import ScrollUp from '../home/ScrollUp';

const AppThemeSetting = () => {
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isColorSettingOpen, setColorSettingOpen] = useState(false);

  const contactno2 = "+917373736215";

  return (
    <>    
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        bottom: { xs: 85, xl: 125 },
        zIndex: 1110,
        
      }}
      className='customizerOption'
    >
      
      <ScrollUp></ScrollUp>

      <Box
        sx={{
          borderRadius: '3px',
          margin:0,
          left:0,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: orange[700],
          },
          '& button': {
            borderRadius: '30px 0 0 30px',

            '&:focus': {
              borderRadius: '30px 0 0 30px',
            },
          },
        }}
      >
        <IconButton>
        <Link
                href={`tel:${contactno2}`}
                target="_blank"
                className="footermenu"
              >
          <CallTwoToneIcon sx={{
            color: 'white',
            fontSize:'25px',
            fontWeight:500,
          }}
          />
        </Link>
        </IconButton>

      </Box>
   

      </Box>
    
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        bottom: { xs: 85, xl: 90 },
        zIndex: 1110,
        
      }}
      className='customizerOption'
    >
       <Link
                href={`https://wa.me/${contactno2}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                <Image src="/images/whatsapp.webp" width={50} height={50} />
              </Link>
    </Box>
    </>

  );
};

export default AppThemeSetting;
