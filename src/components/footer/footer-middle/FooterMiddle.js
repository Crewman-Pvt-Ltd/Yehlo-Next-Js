import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box, alpha } from "@mui/system";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ractangle from "../../../../public/static/footer/Rectangle.svg";
import magnifying from "../../../../public/static/footer/magnifying.svg";
import phone from "../../../../public/static/footer/phone.svg";
import { getCurrentModuleType } from "../../../helper-functions/getCurrentModuleType";
import { ModuleTypes } from "../../../helper-functions/moduleTypes";
import { CustomStackFullWidth } from "../../../styled-components/CustomStyles.style";
import CustomImageContainer from "../../CustomImageContainer";
import AppLinks from "./AppLinks";
import RouteLinks from "./RouteLinks";
import SocialLinks from "./SocialLinks";
import SomeInfo from "./SomeInfo";
import FooterBottomItems from "../FooterBottomItems";
import { useRouter } from "next/router";
import LocationViewOnMap from "../../Map/location-view/LocationViewOnMap";

const FooterMiddle = (props) => {
  const { configData, landingPageData } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpenCloseMap = () => {
    setOpen(!open);
  };
  const handleClickToRoute = (href) => {
    router.push(href, undefined, { shallow: true });
  };
  let zoneid = undefined;
  if (typeof window !== "undefined") {
    zoneid = localStorage.getItem("zoneid");
  }
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  let token;
  const businessLogo = `${configData?.base_urls?.business_logo_url}/${configData?.logo}`;

  return (
    <CustomStackFullWidth sx={{
      backgroundColor:
        getCurrentModuleType() === ModuleTypes?.FOOD
          ? alpha(theme.palette.moduleTheme.food, 0.051)
          : alpha(theme.palette.primary.main, 0.051),
         
     
    }}>
      <Grid container spacing={{ xs: 3, md: 2 }} justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={4.2}>
          <CustomStackFullWidth
            gap="0px"
            // alignItems={{ xs: "center", sm: "flex-start" }}
            justifyContent="flex-start"
          >
           
            <Box
              sx={{
                display: "flex",
                alignItems: "center", 
                paddingTop: "20px",
                img: {
                  transition: "all ease 0.5s",
                },
                "&:hover": {
                  img: {
                    transform: "scale(1.04)",
                  },
                },
              }}
            >
              <CustomImageContainer
                src={businessLogo}
                alt={`${configData?.business_name}`}
                width="auto"
                height="40px"
                objectfit="contain"
              />
              {/* Spacer */}
              <Box sx={{ flexGrow: 1 }} />
              {(Number.parseInt(
                landingPageData?.download_user_app_links?.playstore_url_status
              ) === 1 ||
                Number.parseInt(
                  landingPageData?.download_user_app_links
                    ?.apple_store_url_status
                ) === 1) && (
                <AppLinks
                  configData={configData}
                  changeSingle
                  landingPageData={landingPageData}
                />
              )}
            </Box>
            <SocialLinks
              configData={configData}
              landingPageData={landingPageData}
            />
          </CustomStackFullWidth>
        </Grid>

        <Grid item xs={12} sm={6} md={7.8}>
          <Box
            sx={{
              position: "relative",
              height: "auto",
              "&::before": {
                content: '""',
                position: "absolute",
                borderRadius: "23px",
                inset: "0",
                background: theme.palette.background.default,
              },
            }}
          >
            <Box
              padding={{ xs: "20px 8px", sm: "10px" }}
              sx={{
                backgroundColor:
                  getCurrentModuleType() === ModuleTypes?.FOOD
                    ? alpha(theme.palette.moduleTheme.food, 0.051)
                    : alpha(theme.palette.primary.main, 0.051),
                borderRadius: "10px",
                position: "relative",
                height: "auto",
                mt: { xs: 0, sm: "1rem" },
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} align={isSmall && "center"}>
                  <CustomStackFullWidth
                    flexDirection="row"
                    justifyContent="space-between"
                    gap="10px"
                  >
                    <RouteLinks token={token} configData={configData} />
                    {isSmall && (
                      <FooterBottomItems
                        handleClickToRoute={handleClickToRoute}
                        configData={configData}
                      />
                    )}
                  </CustomStackFullWidth>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
       
      </Grid>
      {open && (
        <LocationViewOnMap
          open={open}
          handleClose={handleOpenCloseMap}
          latitude={configData?.default_location?.lat}
          longitude={configData?.default_location?.lng}
          address={configData?.address}
        />
      )}
    </CustomStackFullWidth>
  );
};

FooterMiddle.propTypes = {};

export default FooterMiddle;
