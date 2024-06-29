import React from "react";
import Slider from "react-slick";
import Drgalleryitem1 from "./Drgalleryitem1";
import { heroPhotoList } from "../Constant/Photoslider";
import Heading from "./Heading";
import { headList3} from "../Constant/titlefile";
import { Box, Grid } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";



const Centermode = () => {
 
    
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("sm"));
    const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
    const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 3,
    slidesToScroll: 1,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,


      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 3,
      slidesToScroll: 1,

    appendDots: dots => (
        <div
          style={{
            // backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            
            width: "15px",
            height:'15px',
            color: "#104099",
            borderRadius:'50%',
            // border: "1px blue solid",
            background:'#104099'
          }}
        >
          {/* {i + 1} */}
        </div>
      )

  };
  

  return (
    <>
    <Box className='section'>
    <Heading data={headList3}></Heading>

    <div className="photo-gallery">
      {/* <Slider {...settings}> */}
      <Grid container spacing={2} alignItems='center' justifyContent='center' textAlign='center'>
                                                    
              {heroPhotoList.map((item) => (
                <Drgalleryitem1 key={String(item.id)} item={item} />
              ))}   
               
              </Grid>     
         {/* </Slider>   */}
    </div>
    </Box>
    </>
  );
};

export default Centermode;
