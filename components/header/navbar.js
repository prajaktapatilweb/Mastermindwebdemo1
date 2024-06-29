import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useMediaQuery,
    Container,
    Menu,
    MenuItem,
    Button,
    Box,
    Stack,
    Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ExpandLess, ExpandMore, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Link from "next/link";
import Image from "next/image";

// const  = [
//   { label: "Products" },
//   { label: "Pricing" },
//   { label: "Blog", subGroup: [{ label: "Item1" }, { label: "Item2" }, { label: "Item3" }] },
//   { label: "Pricing" },
// ];
const navItems = [
    { linkID: "/#home", label: "Home" },
    { linkID: "/#aboutus", label: "About Us" },
    { linkID: "/#treatments", label: "Treatments" },
    { linkID: "/#Doctors", label: "Doctors" },
    { linkID: "/#testimonials", label: "Testimonials" },
    { linkID: "/#gallery", label: "Gallery" },
    { linkID: "/#contactform", label: "Contact" },
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return React.cloneElement(children, {
        style: {
            transform: trigger ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.3s",
        },
    });
}

export default function Navbar(props) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
    const toggleDrawer = (open) => () => {
        setOpenDrawer(open);
    };

    const handleSubMenuClick = () => {
        setOpenSubMenu(!openSubMenu);
    };

    const handleCloseNavMenu = () => {
        setOpenDrawer(false)
        setAnchorElNav(null);
    };
    const renderMenu = (
        <List
        // sx={{ width: 250 }}
        >
            {navItems.map((item) => (
                <>
                    {item?.subGroup ? (
                        <>
                            <ListItem button onClick={handleSubMenuClick}>
                                <ListItemText primary={item.label} />
                                {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item?.subGroup.map((item2) => (
                                        <ListItem button sx={{ pl: 4 }}>

                                            <ListItemText primary={item2.label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ) : (
                        <Link

                            href={item.linkID}
                            sx={{
                                fontWeight: 800,
                                letterSpacing: ".1rem",
                                color: "black",
                                textDecoration: "none",
                                textAlign: "center",
                            }}
                        >
                            <Button
                                key={item.label}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: "block" }}>
                                {item.label}
                            </Button>
                        </Link>
                        // <ListItem button>

                        //   <ListItemText primary={item.label} />

                        // </ListItem>

                    )}
                </>
            ))}
        </List>
    );
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [flag, setFlag] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenMobileSubMenu = () => {
        // handleCloseNavMenu()
        setFlag(!flag);
    };

    return (
        <>
            {/* <HideOnScroll {...props}> */}
                <Container>
                    <Toolbar>
                        {!isLargeScreen && (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Box sx={{flexGrow:1,p:1,textAlign:{xs:'right',sm:'right',md:'left',lg:'left'}}}>
 <Image src="/images/mmwdlogo.png" width={100} height={90} className="pngback"></Image>
 </Box>
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                flexGrow: 1,
                            }}>
                            LOGO
                        </Typography> */}
                        {isLargeScreen && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Stack direction="row">
                                    {navItems.map((page) => (
                                        <>
                                            {page?.subGroup ? (
                                                <Box sx={{ flexGrow: 0 }}>
                                                    <Link
                                                        key={i}
                                                        href={page.linkID}
                                                        sx={{
                                                            fontWeight: 800,
                                                            letterSpacing: ".1rem",
                                                            color: "black",
                                                            textDecoration: "none",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <Button
                                                            key={page.label}
                                                            onClick={handleOpenUserMenu}
                                                            sx={{ my: 2, color: "white", display: "block" }}>

                                                            {page.label}
                                                        </Button>
                                                    </Link>
                                                    <Menu
                                                        sx={{ mt: "45px" }}
                                                        id="menu-appbar"
                                                        anchorEl={anchorElUser}
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        keepMounted
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        open={Boolean(anchorElUser)}
                                                        onClose={handleCloseUserMenu}>
                                                        {page?.subGroup.map((setting) => (
                                                            <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                                                                <Typography textAlign="center">{setting.label}</Typography>
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                </Box>
                                            ) : (
                                                <Link

                                                    href={page.linkID}
                                                  
                                                >
                                                    <Button
                                                        key={page.label}
                                                        onClick={handleCloseNavMenu}
                                                        sx={{ mx: 1, color: "white", display: "block",textTransform:'initial',fontSize:'16px',letterSpacing:1 }}>
                                                        {page.label}
                                                    </Button>
                                                </Link>
                                            )}
                                        </>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </Container>

            {/* </HideOnScroll> */}

            {!isLargeScreen && (
                <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
                    {renderMenu}
                </Drawer>
            )}
        </>
    );
}