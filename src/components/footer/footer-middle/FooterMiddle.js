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
import Subscribe from "../footer-top/Subscribe";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    <CustomStackFullWidth
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: { xs: 0, md: "40px" },
    paddingRight: { xs: 0, md: "35px" },
      }}
    >
     

      <Grid container spacing={{ xs: 3, md: 2 }} justifyContent="flex-start" >
        <Grid item xs={12} sm={6} md={5}>
          <CustomStackFullWidth gap="0px" justifyContent="flex-start">
            <Box
              sx={{
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
                height="55px"
                objectfit="contain"
              />
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter and unlock a world of exclusive</p>
              <Subscribe />
            </Box>
          </CustomStackFullWidth>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CustomStackFullWidth gap="0px" justifyContent="flex-start" >
            <p class="footer-heading">DOWNLOAD OUR APP</p>
            {(Number.parseInt(
              landingPageData?.download_user_app_links?.playstore_url_status
            ) === 1 ||
              Number.parseInt(
                landingPageData?.download_user_app_links?.apple_store_url_status
              ) === 1) && (
                <Box
                sx={{
                  width: {
                    sm: '50%',
                  md: '40%',
                  },
                  marginTop: {
                    sm: '0',
                  md: '15px',
                  }
                }}
              >
                <AppLinks
                  configData={configData}
                  changeSingle
                  landingPageData={landingPageData}
                  direction="column"
                />
              </Box>
            )}
          </CustomStackFullWidth>
        </Grid>

        <Grid item xs={6} sm={12} md={2}>
          <CustomStackFullWidth justifyContent="space-between" gap="10px">
            <p class="footer-heading">Partner with us</p>
            <RouteLinks token={token} configData={configData} />
          </CustomStackFullWidth>
        </Grid>
        <Grid item xs={6} sm={12} md={2}>
          <CustomStackFullWidth justifyContent="space-between" gap="10px">
            <p class="footer-heading">Quick Links</p>
           

            <FooterBottomItems
            configData={configData}
            handleClickToRoute={handleClickToRoute}
            />

          </CustomStackFullWidth>
        </Grid>
        <Grid item xs={12}>
          <Divider
            sx={{
              borderColor: "black",
              
            }}
          />
        </Grid>
      </Grid>
   
<Grid
  container
  item
  xs={12}
  sm={12}
  md={12}
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>
  <Grid item sx={{ display: "flex", alignItems: "center" }}>
    <p style={{ marginRight: '5px' }}>Follow Us on</p>
    <InstagramIcon  />
    <PinterestIcon  />
    <FacebookIcon />
    <LinkedInIcon />
  </Grid>
  <Grid item>
    <p>Copyright © 2024, yehlo</p>
  </Grid>
</Grid>
    </CustomStackFullWidth>
  );
};

FooterMiddle.propTypes = {};

export default FooterMiddle;
