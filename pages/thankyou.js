import React from 'react'
import { MainLayout } from '../components/layout';
import HomeHero from '../components/home/hero';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';

export default function Thankyou() {
    return (
        <div>
            {/* <HomeHero /> */}
            <Box
                sx={{
                    background: 'linear-gradient(to right, #104099 40%, #2dd3aa 100%, #2dd3aa 100%, #104099 10%)',
                    display: 'flex',
                    height: '100vh',
                    alignItems: 'center',
                    justifyItems: 'center'

                }}
            >
                {/* "thank you " : null} */}
                <Container maxWidth="lg">
                    <Grid container alignItems='center' justifyContent='center'>
                        <Grid item xs={12} md={12}>
                            <Box>
                                <Typography
                                    component="h1"
                                    sx={{
                                        // width: { md: 850 },
                                        position: 'relative',
                                        fontSize: { xs: 20, md: 25 },
                                        mb: { xs: 3, sm: 0 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        color: 'white',
                                        lineHeight: 1.5,
                                        textAlign: 'center'
                                    }}
                                >
                                    Thank you for showing interest in <Link href="/" sx={{ color: 'orange' }}> HSR Dental Booth
 </Link>. We will contact you shortly.
                                </Typography>
                                <Stack direction='column' alignItems='center' >
                                    <Button size="large" variant="contained" sx={{ mt: 2, fontSize: 17, backgroundColor: 'secondary.main', alignContent: 'center', color: 'white' }}>
                                        <Link href="/#" >
                                            Home
                                        </Link>
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </div>
    )
}
// Thankyou.getLayout = (page) => <MainLayout>{page}</MainLayout>;