import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { MentorCardItem } from "../mentor";
import { data } from "./mentors.data";
import Heading from "./Heading";
import { headList6 } from "../Constant/titlefile";

const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "absolute",
        left: 0,


        // paddingLeft: theme.spacing(1),
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(0),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
}));
const Testimonial = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const sliderConfig = {
        infinite: true,
        arrows:false,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
       
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: '50%',
                    bottom:5
                }}
            />
        ),
    };
    return (
        <Box
            id="testimonials"
            sx={{
                py: { xs: 5, md: 7 },
                backgroundColor: "#fafafa",
            }}
        >
            <Container>
               <Heading data={headList6}></Heading>
                <Slider {...sliderConfig}>
                    {data.map((item) => (
                        <MentorCardItem key={String(item.id)} item={item} />
                    ))}
                </Slider>


            </Container>
        </Box>
    );
};
export default Testimonial;
