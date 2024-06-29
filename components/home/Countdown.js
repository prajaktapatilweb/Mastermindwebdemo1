import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card, Typography } from "@mui/material";
import CountUp from "react-countup";

export default function Countdown() {
    var Details = [
        // {
        //     numbers: "2000",
        //     title: "Happy Patients"

        // },
        {
            numbers: "3000",
            title: " Root Canal Treatment",
        },
        {
            numbers: "4000",
            title: "Crown & Bridges",
        },
        {
            numbers: "3000",
            title: "Dental Implants",
        },

       
        {
            numbers: "500",
            title: "Braces and Aligners",
        },
    ];

    return (
        <div>
            <Box>
                <Grid container spacing={2} sx={{ my: 5, height: '100%',display:'flex' }}>
                    {Details.map((item, i) => (
                        <Grid item xs={12} sm={12} md={3} key={i} alignItems='center' justifyContent='center' textAlign='center'>
                            <Card
                  sx={{
                    textAlign: 'center',
                    px: 1,
                    py: 4,
                    zIndex: 1,
                    // height: '100%',display:'flex',
                    position: 'relative',
                    mx: { xs: 2,sm:2, md: 2 },
                    // padding: 3,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    // boxShadow: 'rgba(40, 40, 73, 0.25) 0px 40px 70px -10px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                    border: '1px solid lightgrey',
                  }}
                >
                  
                                <Typography
                                    sx={{
                                        color: "primary.dark",
                                        // mb: { xs: 1, md: 2 },
                                        fontSize: { xs: 34, md: 30 },
                                        fontWeight: "bold",
                                        fontFamily: "Open Sans, sans-serif"
                                    }}
                                >
                                    <CountUp end={item.numbers} duration={5} start={200} />
                                    <span>+</span>
                                </Typography>
                              
                              
                                <Typography   variant="h4"  color='primary.main'>
                                    {item.title}
                                </Typography>
                              
                            </Card>

                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
