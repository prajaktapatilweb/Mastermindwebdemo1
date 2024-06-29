import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Heading({ data }) {
    return (
        <div>
            <Box>
                {data.map((item) => (
                    <Box sx={{textAlign:'center',mb:3}}>
                       
                        <Typography variant="h2" sx={{color:'primary.dark'}}>
                            {item.title}
                        </Typography>
                        <Typography variant='p' sx={{color:'primary.dark'}}>
                            {item.subtitle}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}
