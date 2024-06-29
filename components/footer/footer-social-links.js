import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';

export const socialLinks = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/dranuj6344/',
        icon: '/images/icons/instagram.svg',
    },
   
   
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/dranujdynamicdentalcare/',
        icon: '/images/icons/facebbok3.png'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/dranujdynamicdentalcare/',
        icon: '/images/icons/facebbok3.png'
    },
    



];
const SocialLinkItem = ({ item }) => (<Box component="li" sx={{
    display: 'inline-block',
    color: 'primary.contrastText',
    mr: 0.5,
}}>
    <Link target="_blank" sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
            backgroundColor: 'secondary.main',
        },
        '& img': {
            fill: 'currentColor',
            width: 22,
            height: 'auto',
        },
    }} href={item.link}>
        {/* eslint-disable-next-line */}
        <Image src={item.icon} alt={item.name + 'icon'} width={22} height={22} />
    </Link>
</Box>);
// default
const SocialLinks = () => {
    return (<Box sx={{ ml: -1 }}>
        <Box component="ul" sx={{
            m: 0,
            p: 0,
            lineHeight: 0,
            borderRadius: 3,
            listStyle: 'none',

        }}>
            {socialLinks.map((item) => {
                return <SocialLinkItem key={item.name} item={item} />;
            })}

        </Box>
    </Box>);
};
export default SocialLinks;
