import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Box, Link } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Image from "next/image";

export default function DetailBlog({ DetailObject }) {
    return (
        <div>
            <Box sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }}>

                <Container>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid item xs={12} md={8}>
                            {DetailObject.map((item, i) => (
                                <>
                                    {(() => {
                                        switch (item.type) {
                                            case "title":
                                                return (
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ color: "#20509e", py: 2 }}
                                                    >
                                                        {item.text}{" "}
                                                    </Typography>
                                                );
                                            case "images":
                                                return (
                                                    <Image
                                                        src={item.img}
                                                        width={100}
                                                        height={100}
                                                        layout="responsive"
                                                    ></Image>
                                                );
                                            case "subtitle":
                                                return (
                                                    <Typography
                                                        variant="h3"
                                                        sx={{ color: "black", py: 2 }}
                                                    >
                                                        {item.text}{" "}
                                                    </Typography>
                                                );

                                            case "para":
                                                return item?.link?.bool
                                                    ? item.text.map((item2, ii) =>
                                                        ii === item.link.elemNo ? (
                                                            <Typography
                                                                variant="body1"
                                                                display="inline"
                                                                gutterBottom
                                                            >
                                                                <Link href={item?.link?.link}>{item2}</Link>
                                                            </Typography>
                                                        ) : (
                                                            <Typography variant="body1" display="inline">
                                                                {" "}
                                                                {item2}{" "}
                                                            </Typography>
                                                        )
                                                    )
                                                    : item.text.map((item2, ii) => (
                                                        <Typography
                                                            variant="body1"
                                                            gutterBottom
                                                            textAlign="justify"
                                                        >
                                                            {item2}{" "}
                                                        </Typography>
                                                    ));
                                            case "items":
                                                return item?.link?.bool ? (
                                                    <ListItem alignItems="flex-start">
                                                        {" "}
                                                        <KeyboardDoubleArrowRightIcon />
                                                        <ListItemText>
                                                            {item.text.map((item2, ii) =>
                                                                ii === item.link.elemNo ? (
                                                                    <Link
                                                                        href={item?.link?.link}
                                                                        sx={{ textDecoration: "none" }}
                                                                    >
                                                                        {" "}
                                                                        {item2}
                                                                    </Link>
                                                                ) : (
                                                                    <> {item2}</>
                                                                )
                                                            )}
                                                        </ListItemText>
                                                    </ListItem>
                                                ) : (
                                                    item.text.map((item2, ii) => (
                                                        <ListItem alignItems="flex-start">
                                                            {" "}
                                                            <KeyboardDoubleArrowRightIcon />
                                                            <ListItemText>{item2}</ListItemText>
                                                        </ListItem>
                                                    ))
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                </>
                            ))}
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                            hjjhfjh
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
