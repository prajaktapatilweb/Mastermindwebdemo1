import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { ArrowDownwardTwoTone, KeyboardArrowDown } from '@mui/icons-material';
import Link from 'next/link';

export default function AccountMenu({ list }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                {/* <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip> */}
                {/* < Link href='page.linkID' sx={{
                    mr: 2,
                    fontFamily: 'monospace',

                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    color: 'black',
                    textDecoration: 'none',
                    textAlign: "center"
                }}> */}
                <MenuItem onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    color="inherit"
                >
                    <Typography sx={{
                        mx: 2,
                        // display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                        fontWeight: 800,
                        letterSpacing: '.1rem',
                        color: 'black',
                        textDecoration: 'none',
                    }} variant='h5'  >Services <KeyboardArrowDown /></Typography>
                </MenuItem>
                {/* </Link> */}

            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' } }}>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    color="inherit"
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {
                        list?.map((item, i) => (
                            < Link key={i} href={item.linkID} sx={{
                                mr: 2,
                                fontWeight: 800,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                                textAlign: "center",
                            }}>
                                <MenuItem key={i} onClick={handleClose}>
                                    <Typography variant='h5'>
                                        {item.label}</Typography>
                                </MenuItem>
                            </Link>
                        ))
                    }
                    {/* < Link href='{page.linkID}' sx={{
                        mr: 2,
                        fontFamily: 'monospace',

                        fontWeight: 800,
                        letterSpacing: '.1rem',
                        color: 'black',
                        textAlign: "center",
                        textDecoration: 'none',
                    }}>
                        <MenuItem onClick={handleClose}>
                            <Typography sx={{ textDecoration: 'none' }}>page.label</Typography>
                        </MenuItem>
                    </Link> */}
                    {/* <Link href='{item.linkID}' >
                        <MenuItem onClick={handleClose}>
                            <Typography >
                                <Avatar /> Profile11
                            </Typography>
                        </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout 
                </MenuItem>*/}
                </Menu>
            </Box >
        </React.Fragment >
    );
}
