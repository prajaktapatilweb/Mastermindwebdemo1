import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../config/theme';
const MUIProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default MUIProvider;
