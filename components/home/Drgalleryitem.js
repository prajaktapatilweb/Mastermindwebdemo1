import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const Drgalleryitem = ({ item }) => {
    return (
        <Box sx={{
            px: 1,
        }}>
            <Box sx={{
                p: 1,
                // backgroundColor: 'background.paper',
                borderRadius: 1,
                transition: (theme) => theme.transitions.create(['box-shadow']),
                boxShadow: 5,
                '&:hover': {
                    boxShadow: 2,
                    [`& .${iconButtonClasses.root}`]: {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        boxShadow: 2,
                    },
                },
            }}>
                <Box>

                    <Image
                        alt={'Clinic' + item.id}
                        src={`/images/Thane/t/clinic${item}.jpg`}
                        width={100}
                        height={100}

                        layout='responsive'></Image>

                </Box>

            </Box>
        </Box>);
};
export default Drgalleryitem;
