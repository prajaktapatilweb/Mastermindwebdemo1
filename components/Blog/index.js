import { Box, Card, Container, Grid, Link } from '@mui/material'
import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Blog1DentalImplant from './Blog1DentalImplant';

export default function Blog() {


    var Blogdata1 = [
        {
            title: "Dental Implants: An Ancient Treatment Redefined by Modern Technology",
            para: <span>
                History<br></br>
                Tooth loss has been a problem since ancient times as the skeletal remains of Egyptian mummies suggest. And because of the curious mind of the human race, there have been numerous attempts and experiments to replace those missing teeth with a wide variety of materials.
            </span>,
            link: '/blogs/history-of-dental-implants'
        }
    ]
    return (
        <div>
            <Box sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }}>
                <Container>
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={4}>
                            {Blogdata1.map((item, i) =>
                                <Card sx={{ background: "#fbfcfe", border: "1px solid #e8edf2", p: 3 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="/images/blog/img1.jpg"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#20509e' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.para}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={item.link} sx={{ textDecoration: 'none', color: '#20509e', fontWeight: 'bold' }}> Read More</Link>
                                    </CardActions>
                                </Card>
                            )}
                        </Grid>
                    </Grid>


                </Container>
            </Box>


        </div>
    )
}
