import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Drgallery from './Drgallery'

export default function Trainer() {
    return (
        <div>
            <Box
                id="trainer"
                sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }}
            >

                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: 30, md: 35 },
                                    pb: 3,
                                }}
                                gutterBottom
                            >
                                Training Session at Dr. Akshay's DentAvenue
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} alignItems="center" justifyContent="center" textAlign="justify">
                        <Grid item xs={12} md={6}>

                            One-Day Intensive Implantology Training

                            At Dr. Akshay's DentAvenue, we take pride in sharing our expertise with fellow dental professionals. Our recent one-day training session on basic Implantology was a resounding success.

                            Highlights of the Training Session:

                            In-Depth Lectures: Participants delved into the principles and techniques of Implantology through comprehensive lectures.

                            Hands-On Experience: Doctors had the invaluable opportunity to practice implant placement on models, gaining practical insights under expert guidance.

                            In Collaboration with HIOSSEN Implants (USA): This session was conducted in association with HIOSSEN Implants, a renowned name in dental implant technology from the USA. This partnership ensured access to cutting-edge advancements and top-quality materials.

                            About Dr. Akshay:

                            With over a decade of experience in dentistry, Dr. Akshay is an accomplished Prosthodontist, specializing in Implants and Full Mouth Rehabilitation (FMR). As a former Assistant Professor and proud alumnus of Government Dental College, he brings a wealth of knowledge to every aspect of dental care.

                            Why Training Matters:

                            Beyond patient care, Dr. Akshay is dedicated to advancing the field of dentistry. By conducting specialized training sessions, he contributes to the professional development of fellow dentists, ultimately raising the standard of care in the dental community.

                            For inquiries about future training opportunities or to learn more about Dr. Akshay's specialized services, please feel free to get in touch.
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Drgallery></Drgallery>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </div >
    )
}
