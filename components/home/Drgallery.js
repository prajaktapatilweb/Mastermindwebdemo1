import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import Drgalleryitem from "./Drgalleryitem";
const SliderArrow = (props) => {
    const { onClick, type, className } = props;
    return (
        <IconButton
            sx={{
                backgroundColor: "background.paper",
                color: "primary.main",
                "&:hover": {
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                },
                bottom: { xs: "-70px !important", md: "-28px !important" },
                left: "unset !important",
                right: type === "prev" ? "60px !important" : "0 !important",
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === "next" ? (
                <IconArrowForward sx={{ fontSize: 0 }} />
            ) : (
                <IconArrowBack sx={{ fontSize: 0 }} />
            )}
        </IconButton>
    );
};
const StyledDots = styled("ul")(({ theme }) => ({
    "&.slick-dots": {
        position: "absolute",
        left: 0,
        bottom: -30,
        paddingLeft: theme.spacing(1),
        textAlign: "center",
        "& li": {
            marginRight: theme.spacing(2),
            "&.slick-active>div": {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}));
const Drgallery = () => {
    const { breakpoints } = useTheme();
    const matchMobileView = useMediaQuery(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        adaptiveheight: false,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 1,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box
                sx={{
                    height: 15,
                    width: 15,
                    backgroundColor: "divider",
                    display: "flex",
                    borderRadius: 50,
                }}
            />
        ),
    };
    return (
        <Box>


            <Slider {...sliderConfig}>
                {/* {data.map((item) => (<PhotoCardItem key={String(item.id)} item={item} />))} */}
                {[...Array(3)].slice(0).map((e, i) => (
                    <Drgalleryitem key={i} item={i + 1} />
                ))}
            </Slider>

        </Box>
    );
};
export default Drgallery;
