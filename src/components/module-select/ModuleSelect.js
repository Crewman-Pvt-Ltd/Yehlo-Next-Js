import { Skeleton, styled, Tooltip, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { setSelectedModule } from "../../redux/slices/utils";
import CustomImageContainer from "../CustomImageContainer";
import Slider from "react-slick";
import { textWithEllipsis } from "styled-components/TextWithEllipsis";
import { makeStyles } from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* const Container = styled(Stack)(({ theme }) => ({
  position: "fixed",
  zIndex: 1000,
  top: 150,
  right: 0,
  boxShadow: "0px 0px 29.7006px rgba(71, 71, 71, 0.1)",
  background: theme.palette.background.paper,
  borderTopLeftRadius: "29px",
  borderBottomLeftRadius: "29px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
})); */

var settings = {
  dots: false,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true

      }
    }
  ]
};

const useStyles = makeStyles((theme) => ({
  slider: {
    margin: '10px 10px', // Default margin for all screens
    [theme.breakpoints.up('md')]: { // Adjust the breakpoint as needed
      margin: '20px 20px', // Margin for medium and larger screens
    },
  },
}));

const ModuleContainer = styled(Box)(({ theme, selected }) => ({
  zIndex: 1000,
  padding: "10px",
  cursor: "pointer",
  width: "120px",
  height: "120px",
  borderRadius: "11px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(227, 227, 227, 0.2)",
  border: "2px solid",
  transition: "all ease 0.5s",
  borderColor: selected
    ? theme.palette.primary.main
    : theme.palette.background.paper,
  background:
    selected &&
    "radial-gradient(50% 50% at 50% 50%, rgba(0, 202, 108, 0) 0%, rgba(0, 255, 137, 0.2) 100%)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(0, 202, 108, 0) 0%, rgba(0, 255, 137, 0.2) 100%)",
    "img, svg": {
      transform: "scale(1.1)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "90px",
    height: "75px",
  },
}));

export const zoneWiseModule = (data) => {
  const currentZoneIds = JSON.parse(localStorage.getItem("zoneid"));
  const result = data.filter((moduleItem) => {
    const zoneIds = moduleItem?.zones?.map((zone) => zone.id);
    return currentZoneIds?.some((id) => zoneIds?.includes(id));
  });
  return result;
};

const ModuleSelect = ({
  moduleSelectHandler,
  selectedModule,
  data,
  configData,
  dispatch,
}) => {
  const handleModuleSelect = (item) => {
    dispatch(setSelectedModule(item));
    moduleSelectHandler(item);
  };

  const classes = textWithEllipsis();
  const classes2 = useStyles();

  return (
    <>
      {data ? (
        <div className="slick-slider-container">
          <Slider {...settings} className={classes2.slider}>
            {zoneWiseModule?.(data)?.map((item, index) => {
              return (
                <>
                  <Tooltip
                    title={item?.module_name}
                    key={index}
                    placement="left-start"
                  >
                    <ModuleContainer
                      selected={
                        item?.module_type === selectedModule?.module_type &&
                        item?.id === selectedModule?.id
                      }
                      onClick={() => handleModuleSelect(item)}
                    >
                      <CustomImageContainer
                        src={`${configData?.base_urls?.module_image_url}/${item?.icon}`}
                        alt="mobile"
                        objectFit="cover"
                      />
                      <Typography className={classes.singleLineEllipsis}>
                        {item?.module_name}
                      </Typography>
                    </ModuleContainer>
                  </Tooltip>
                </>
              );
            })}
          </Slider>
        </div>
      ) : (
        <>
          {[...Array(5)].map((item, index) => (
            <Skeleton
              key={index}
              width="40px"
              height="40px"
              variant="rectangle"
            />
          ))}
        </>
      )}
    </>
  );
};

export default ModuleSelect;
