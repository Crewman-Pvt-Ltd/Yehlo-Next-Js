import React, { useEffect, useState } from "react";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";

import {
  Grid,
  alpha,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { t } from "i18next";

import { Box } from "@mui/system";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { getLanguage } from "../../../helper-functions/getLanguage";
import CustomImageContainer from "../../CustomImageContainer";
import DollarSignHighlighter from "../../DollarSignHighlighter";
import down_arrow from "../assets/downarrow.png";
import HeroLocationForm from "./HeroLocationForm";
// import ModuleSelectionRaw from "./module-selection/ModuleSelectionRaw";
import DownArrow from "../assets/DownArrow";
import { RTL } from "components/rtl";
import DownArrowRTL from "../assets/DownArrowRTL";

const HeroTitleSection = ({ configData, landingPageData, handleOrderNow }) => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const currentLanguage = getLanguage();
  const [currentLocation, setCurrentLocation] = useState(null);
  const lanDirection = getLanguage() ? getLanguage() : "ltr";
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLocation(window.localStorage.getItem("location"));
    }
  }, []);
  const getSearchOrModulesBySelectedModules = () => {
    if (currentLocation) {
      return <ModuleSelectionRaw />;
    } else {
      return (
        <CustomStackFullWidth mt="15px">
          <HeroLocationForm />
        </CustomStackFullWidth>
      );
    }
  };
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <CustomStackFullWidth>
        <CustomStackFullWidth spacing={0.4}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            spacing={0.5}
            flexWrap="wrap"
          >
            <Typography className="abcd"
              sx={{
                fontSize: isXSmall ? "20px" : "54px",
                lineHeight: isXSmall ? "24px" : "58px",
                fontWeight: "bold",
              }}
            >
              <DollarSignHighlighter
                theme={theme}
                text={landingPageData?.header_title}
              />
            </Typography>
          </Stack>
          <Typography
            color="white"
            fontSize={isXSmall ? "16px" : "35px"}
            lineHeight={isXSmall ? "22px" : "58px"}
            fontWeight="400"
          >
            <DollarSignHighlighter
              theme={theme}
              text={landingPageData?.header_sub_title}
            />
          </Typography>
        </CustomStackFullWidth>
        <CustomStackFullWidth
          flexDirection="row"
          spacing={2}
          justifyContent="space-between"
          mt="14px"
          sx={{ position: "relative" }}
        >
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "20px" },
              color: "white",
            }}
            fontWeight="400"
          >
            <DollarSignHighlighter
              theme={theme}
              text={landingPageData?.header_tag_line}
            />
          </Typography>
          {!getCurrentModuleType() && !isXSmall && (
            <Stack sx={{}}>
              {lanDirection === "rtl" ? <DownArrowRTL /> : <DownArrow />}
            </Stack>
          )}
        </CustomStackFullWidth>
      </CustomStackFullWidth>
      {/* <Grid container>{!isXSmall && getSearchOrModulesBySelectedModules()}</Grid> */}
    </>
  );
};

export default HeroTitleSection;
