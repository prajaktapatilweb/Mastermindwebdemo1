import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import Image from "next/image";
import { Typography } from "@mui/material";
import Heading from "./Heading";
import { headList3, headList7 } from "../Constant/titlefile";

export default function Equipment() {
    var Details = [
        {
            img: "/images/equip/eqip21.jpg",
            altitle: "Dental Scanner",
            desc: "Dental Scanner",
        },
        {
            img: "/images/equip/equip22.jpg",
            altitle: "Digital X Ray",
            desc: "Digital X Ray",
        },
        {
            img: "/images/equip/equip23.jpg",
            altitle: "Dental Loupes",
            desc: "Dental Loupes",
        },
        {
            img: "/images/equip/equip24.jpg",
            altitle: "Portable X Ray",
            desc: "Portable X Ray",
        },
    ];
    return (
        <div>
            <Box
                sx={{
                    py: { xs: 6, md: 6 },
                    backgroundColor: "#f3fbfd",
                }}
            >
                <Container>
                    <Heading data={headList3}></Heading>

                    <Grid container spacing={1}>
                        {Details.map((item, i) => (
                            <Grid item xs={12} md={3} key={i}>
                                <Box>
                                    <Box
                                        sx={{
                                            p: 1,
                                            backgroundColor: "background.paper",
                                            borderRadius: 4,
                                            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
                                            transition: (theme) =>
                                                theme.transitions.create(["box-shadow"]),
                                            "&:hover": {
                                                boxShadow: 2,
                                                [`& .${iconButtonClasses.root}`]: {
                                                    backgroundColor: "primary.main",
                                                    color: "primary.contrastText",
                                                    boxShadow: 2,
                                                },
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                lineHeight: 0,
                                                overflow: "hidden",
                                                borderRadius: 3,
                                                mb: 2,
                                            }}
                                        >
                                            <Image
                                                src={item.img}
                                                width={100}
                                                height={100}
                                                layout="responsive"
                                                alt={"Course " + item.altitle}
                                            />
                                        </Box>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                component="h2"
                                                variant="h5"
                                                sx={{ textAlign: "center", fontSize: "1.2rem" }}
                                            >
                                                {item.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
