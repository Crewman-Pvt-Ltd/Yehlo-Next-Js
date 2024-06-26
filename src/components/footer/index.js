import React from "react";
import {
  StyledFooterBackground,
  StyledFooterTopContainer,
} from "./Footer.style";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
// import FooterBottom from "./FooterBottom";
// import FooterTop from "./footer-top/FooterTop";
import FooterMiddle from "./footer-middle/FooterMiddle";
import { useRouter } from "next/router";
import CustomContainer from "../container";
import { useTheme } from "@emotion/react";

const FooterComponent = (props) => {
  const { configData, landingPageData } = props;
  const router = useRouter();
  const isLandingPage = router.pathname === "/" ? "true" : "false";
  const theme = useTheme()
  return (
    <CustomStackFullWidth
      sx={{
        mt: {
          xs: "2rem",
          sm: "3rem",
          md: router.pathname === "/" ? "2rem" : "3rem",
        },
      }}
    >
      {/* <FooterTop landingPageData={landingPageData} /> */}
      <StyledFooterBackground
        nobottommargin={isLandingPage}
      >
        <CustomStackFullWidth
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <CustomContainer maxwidth="100%" backgroundcolor="rgba(100, 80, 160, 0.1)">
            <CustomStackFullWidth spacing={3}>
              <FooterMiddle
                configData={configData}
                landingPageData={landingPageData}
              />
            </CustomStackFullWidth>
          </CustomContainer>
         {/*  <FooterBottom configData={configData} /> */}
        </CustomStackFullWidth>
      </StyledFooterBackground>
    </CustomStackFullWidth>
  );
};

export default FooterComponent;
