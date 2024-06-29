import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';

export default function FAQCommon({ data }) {
    return (
        <div>
            <Box id="faq" sx={{
                py: { xs: 7, md: 7 }, backgroundColor: '#f8f8f8'
            }}>
                <Container maxWidth="lg" >
                    <Typography variant="h1" sx={{
                        fontSize: { xs: 30, md: 35 }, pb: {
                            xs: 2,
                            md: 2,
                        },
                    }} gutterBottom>
                        FAQs
                    </Typography>
                    {data.map((item, i) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontWeight='bold'>{item.Q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.A}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>

        </div>
    )
}
