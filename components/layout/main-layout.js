import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../footer';
import { Header } from '../header';
import AppThemeSetting from './AppThemeSetting';
const MainLayout = ({ children }) => {
  return (<Box component="main">
    <Header />
    <AppThemeSetting/>
    {children}
    <Footer />
  </Box>);
};
export default MainLayout;
