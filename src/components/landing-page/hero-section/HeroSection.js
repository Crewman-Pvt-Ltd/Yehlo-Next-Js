import {
  Box,
  Grid,
  NoSsr,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CustomBoxFullWidth,
  CustomStackFullWidth,
} from "../../../styled-components/CustomStyles.style";
import CustomImageContainer from "../../CustomImageContainer";
import ModuleSelectionRaw from "./module-selection/ModuleSelectionRaw";
import CustomContainer from "../../container";
import iconicBg from "../assets/hero_background.png";
import HeroLocationForm from "./HeroLocationForm";
import HeroTitleSection from "./HeroTitleSection";
import MobileFrame from "../assets/MobileFrame";
import { Stack } from "@mui/system";

const DynamicModuleSelection = dynamic(() =>
  import("./module-selection/ModuleSelectionRaw")
);
const HeroSection = ({ configData, landingPageData, handleOrderNow }) => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentLocation(window.localStorage.getItem("location"));
    }
  }, []);

  const calculateTopMagin = () => {
    if (currentLocation) {
      return {
        xs: "4rem",
        sm: "5rem",
        md: "5rem",
      };
    } else {
      return {
        xs: "4rem",
        sm: "5rem",
        md: "5rem",
      };
    }
  };

  const getSearchOrModulesBySelectedModules = () => {
    if (currentLocation) {
      return <ModuleSelectionRaw />;
    } else {
      return <CustomStackFullWidth mt="15px"></CustomStackFullWidth>;
    }
  };

  return (
    <>
      <CustomContainer>
        <CustomBoxFullWidth
          sx={{
            backgroundImage: `url(${landingPageData?.base_urls?.header_banner_url}/${landingPageData?.header_banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: calculateTopMagin(),
            backgroundPosition: "center",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            ".shape img": {
              transition: "all ease-in 1s",
            },
            backgroundPosition: "center",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={7}
              sx={{ padding: { xs: "1rem", sm: "2rem", md: "3rem" } }}
            >
              <NoSsr>
                <HeroTitleSection
                  configData={configData}
                  landingPageData={landingPageData}
                  handleOrderNow={handleOrderNow}
                />
              </NoSsr>
            </Grid>
          </Grid>
        </CustomBoxFullWidth>

        {!isXSmall && (
          <>
            <Grid container>
            <Grid item  md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "25px" }}>
        <h1>Shop Smart, Shop Local</h1>
      </Grid>
              <Grid item> {getSearchOrModulesBySelectedModules() }</Grid>
            </Grid>
          </>
        )}

{isXSmall && (
  <>
    {currentLocation ? (
      <>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:"11px"}}>
          <h1>Shop Smart, Shop Local</h1>
        </Grid>
        <Grid item>
          <DynamicModuleSelection isSmall />
        </Grid>
      </>
    ) : (
      <CustomStackFullWidth mt="10px" />
    )}
  </>
)}

      </CustomContainer>
    </>
  );
};

export default HeroSection;
