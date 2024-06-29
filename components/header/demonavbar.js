import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Card, Grid,Hidden, Link } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import { KeyboardArrowDown,  KeyboardArrowRight } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import HomeHero from '../home/hero';
import Navbar from './navbar';


const pages = [

    { linkID: '/#home', label: 'Home' },
    { linkID: '/#aboutus', label: 'About Us' },
    { linkID: '/#treatments', label: 'Treatments' },
    {
        label: 'Services',
        submenu: [
            { linkID: '/services/dental-implants-in-chembur', label: 'Dental Implants' },
            { linkID: '/services/root-canals-in-chembur', label: 'Root Canals', },
            { linkID: '/services/tooth-extraction-in-chembur', label: 'Tooth Extraction' },
            { linkID: '/services/teeth-braces-in-chembur ', label: 'Teeth Braces ' },
            { linkID: '/services/kids-dentist-in-chembur', label: 'Kids Dental Care' },
            { linkID: '/services/smile-designing-in-chembur', label: 'Smile Designing' },
            { linkID: '/services/teeth-whitening-in-chembur', label: 'Teeth Whitening' },
            { linkID: '/services/dental-fillings-in-chembur', label: 'Dental Fillings' },
            { linkID: '/services/crown-and-bridges-treatment-in-chembur', label: 'Crown And Bridges ' },
        ]
    },
    { linkID: '/#testimonials', label: 'Testimonials' },
    { linkID: '/#gallery', label: 'Gallery' },
    { linkID: '/#faq', label: 'FAQ' },
    { linkID: '/trainer', label: 'Training' },
    { linkID: '/#contactform', label: 'Contact' },
    { linkID: '/blog', label: 'Blog' },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];





function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [flag, setFlag] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenMobileSubMenu = () => {
        // handleCloseNavMenu()
        setFlag(!flag);
    };


    const contactno1 = "+917373736215";
    // const contactno2 = "+919702955057";

    return (
        
        <AppBar sx={{background:'#0c0c1d',position:'absolute'}}>
  
        <section style={{
            background: 'red', width: '100%', padding: 0, borderRadius: 0,zIndex:1
        }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        "@media (min-width: 768px)": {
                            flexDirection: "row",
                        },
                    }}
                >
                    <Hidden mdDown>
                        <Box
                            sx={{
                                width: "100%",
                                // maxHeight: 300,
                                "@media (min-width: 768px)": {
                                    width: "70%",
                                },
                            }}
                        >
                            <IconButton aria-label="phone" style={{ color: 'white' }}>
                                {" "}
                                <CallTwoToneIcon />
                            </IconButton>
                           
                            <Link href={`tel:${contactno1}`} target="_blank">
                                <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                    +917373736215

                                </a>
                            </Link>
                          
                            <IconButton aria-label="email" style={{ color: 'white' }}>
                                <EmailTwoToneIcon />{" "}
                            </IconButton>
                            <Link 
                           href={`mailto:${' hsrdentalbooth@gmail.com'}`} target="_blank">
                                <a className="nav-link-inner--text" style={{ color: 'white' }}>
                                hsrdentalbooth@gmail.com

                                </a>
                            </Link>
                        </Box>
                    </Hidden>
                    <Box
                        sx={{
                            width: "100%",
                            textAlign: {
                                xs: "center",
                                sm: "center",
                                md: "right",
                            },
                            // textAlign: 'right',
                            "@media (min-width: 768px)": {
                                width: "30%",
                            },
                        }}
                    >
                        <IconButton aria-label="facebook">
                            {" "}
                            <a
                                href="https://www.facebook.com/hsrdentalbooth/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="facebook"
                            >
                                <FacebookIcon sx={{ color: "white" }} />{" "}
                            </a>
                        </IconButton>
                       
                        <IconButton aria-label="instagram">
                            <a
                                href="https://www.instagram.com/hsrdentalbooth/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="instagram"
                            >
                                <InstagramIcon
                                    sx={{ color: "white", Width: 30, Height: 30 }}
                                ></InstagramIcon>
                            </a>
                        </IconButton>
                        <IconButton aria-label="linkedin">
                            <a
                                href="https://www.justdial.com/Bangalore/Hsr-Dental-Booth-Multispeciality-Dental-Clinic-Opposite-Apollo-Pharmacy-HSR-Layout/080PXX80-XX80-201030170037-N3X2_BZDET"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="linkedin"
                            >
                                 <Image src="/images/jd.png" width={20} height={20} ></Image>

                                  
                                  
                            </a>
                        </IconButton>
                        {/* <IconButton aria-label="youtube">
                            <a
                                href="https://www.youtube.com/channel/UCaHUj0eP9LiEK5zL7QrNbNw"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="youtube"
                            >
                                <YouTubeIcon sx={{ color: "white" }}></YouTubeIcon>
                            </a>
                        </IconButton> */}
                    </Box>
                </Box>
            </Container>
        </section>
        <Navbar/>
       
           


        </AppBar >
    );
}
export default ResponsiveAppBar;