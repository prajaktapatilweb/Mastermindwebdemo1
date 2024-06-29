import React from 'react'
import { Grid, Container, Typography } from '@mui/material'

export default function Degreesection() {
    return (
        <div>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 6 }, }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: 30, md: 35 },
                        pb: 3,
                    }}
                    gutterBottom
                >
                    Step Inside Our Chembur Dental Clinic

                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1689487489606!6m8!1m7!1sCAoSLEFGMVFpcE1iLU9VeUh6TTFZU0lTSXlPMFNGd2ZmQnRmbDZrRU9oZ3NDTmZR!2m2!1d19.0608224!2d72.899771!3f200!4f0!5f0.7820865974627469" width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1689487513369!6m8!1m7!1sCAoSLEFGMVFpcE9zcnVxY2pXaGVOR25kSlRKM01FQzJEcGZfNzdKcmZZTXV4Q3Y0!2m2!1d19.0608224!2d72.899771!3f0!4f20!5f0.7820865974627469" width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1689487528880!6m8!1m7!1sCAoSLEFGMVFpcFBIZjBuNWplRzk2SmYyd1dJS0hPd0RXa3lEa3RlSUR2SUFXQ0Ut!2m2!1d19.0608224!2d72.899771!3f135.6344254400441!4f-14.76405674950719!5f0.7820865974627469" width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}
