import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import { useTheme, styled } from "@mui/material/styles";
import { Card, IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { Details} from "./popular-course.data";
import { CourseCardItem } from "../course";
import Heading from "./Heading";
import { headList2 } from "../Constant/titlefile";

const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -40,
    paddingLeft: theme.spacing(1),
    textAlign: "center",
    "& li": {
      marginRight: theme.spacing(0),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Dentalservices = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("sm"));
  const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows:false,

    slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 3,
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
          borderRadius: 4,
        }}
      />
    ),
  };
  return (
    <Box
      id="treatments"
      sx={{
        py: { xs: 7, md: 7 },

        backgroundColor: "primary.light",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
              <Heading data={headList2}></Heading>
              

          </Grid>

          <Grid item xs={12} md={12}>
          <Slider {...sliderConfig}>
          {Details.map((item) => (
             
                <CourseCardItem key={String(item.id)} item={item} />
               
              ))}
           
        </Slider>
          
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Dentalservices;

