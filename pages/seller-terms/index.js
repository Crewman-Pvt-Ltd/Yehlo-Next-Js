import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import {
  Box,
  fontSize,
  padding,
  textAlign,
  width,
  flex,
  center,
  color,
} from "@mui/system";
import { Typography } from "@mui/material";
import { CustomStackFullWidth } from "../../src/styled-components/CustomStyles.style";
import LogoSide from "../../src/components/logo/LogoSide";
import { Grid } from "@mui/material";
import AppLinks from "../../src/components/footer/footer-middle/AppLinks";
import Slider from "react-slick";
import { SliderCustom } from "../../src/styled-components/CustomStyles.style";
import useGetVendorLandingPage from "../../src/api-manage/hooks/react-query/useGetVendorLandingPage";
const Index = ({ configData, landingPageData }) => {
  const boxxstyle = () => ({
    margin: "0 10px",
    width: "20%",
    height: "200px"
  });

  const { data, refetch, isFetching } = useGetVendorLandingPage();
  useEffect(() => {
    refetch();
  }, []);



  const OuterContainer = () => {
    return (
      <>
      {data && (<>
        <Grid
          container
          sx={{
            // backgroundImage:
            //   "url('https://m.media-amazon.com/images/G/01/sell/images/colors/blue50-100.svg')",
            backgroundColor: "#2299dd0f",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: 800, md: 420 },
            width: { xs: "100%", sm:"100%", md: "100%" },
          }}
        >
            <Grid
              className="vendor-main-firstsec"
              item
              xs={12}
              sm={12}
              md={6}
              sx={{
                paddingLeft: { xs: 0, md: "50px" },
                textAlign: { xs: "center", md: "left" },
                paddingTop: { xs: "3px", md: "50px" },
              }}
            >
              <p className="vendor-main-para1">{data?.home_title}</p>
              <h1 className="vendor-main-heading">
                {data?.home_sub_title}
              </h1>
              <p className="vendor-main-para2">
                {data?.home_heading}
              </p>
              <button
                className="vendor-startsellingbtn"
                style={{
                  backgroundColor: "darkblue",
                  color: "white",
                  height: "50px",
                  width: "150px",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Start Selling
              </button>
            </Grid>
            <Grid
              className="vendor-firstimgsec"
              item
              xs={12}
              sm={12}
              md={6}
              sx={{}}
            >
              <img
                src={data?.home_seller_image}
                width="80%"
                height="80%"
                className="vendor-firstimg"
              />
            </Grid>
          </Grid>

          {(data?.feature_title != null && data?.admin_features?.length > 0) &&

            (<Grid
              container
              sx={{
                textAlign: { xs: "left", md: "center" },

              }}
            >
              <Grid item xs={12} sm={12} md={12} sx={{
                padding: { xs: "0 20px", md: "0" },
              }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  {data?.feature_title}
                </h1>
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{}}>
                <Grid
                  container
                  sx={{
                    padding: { xs: "", md: "0 60px" },
                  }}
                >

                  {(data?.admin_features.length > 0) && data?.admin_features.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Box
                        sx={{
                          height: { xs: "200px", md: "270px" },
                          width: { xs: "90%", md: "90%" },
                          backgroundColor: "white",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          padding: { xs: "20px 30px", md: "20px 30px" },
                          borderRadius: 1.2,
                          marginBottom: 2,
                        }}
                      >
                        <p
                          style={{
                            color: "black",
                            fontSize: "15px",
                            marginBottom: 30,
                          }}
                        >
                          {item?.title}
                        </p>
                        <p
                          style={{
                            color: "black",
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          {item?.sub_title}
                        </p>
                        <p style={{ color: "gray", fontSize: "15px" }}>
                          {item?.sub_title2}
                        </p>
                      </Box>
                    </Grid>
                  ))}


                </Grid>
              </Grid>
            </Grid>
            )
          }

          <Grid container sx={{}}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                textAlign: { xs: "center", md: "center" },
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              >
                {data?.seller_purchase}
              </h1>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                textAlign: { xs: "center", md: "left" },
                padding: { md: "0 50px 0 50px", xs: "0 10px 0 10px" },
                color: "black",
              }}
            >
              {data?.seller_description}
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{}}></Grid>
          </Grid>

          <Grid
            container
            sx={{
              backgroundImage:
                "url('https://m.media-amazon.com/images/G/01/sell/images/illustration/pf-wave-horizon-1.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: { xs: 700, md: 420 },
              width: { xs: "auto", md: "100%" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                paddingLeft: { xs: 0, md: "50px" },
                textAlign: { xs: "center", md: "left" },
                paddingTop: "50px",
              }}
            >
              <h1 className="vendor-main-heading">{data?.seller_footer_title}</h1>
              <p className="vendor-main-para1">
                {data?.seller_footer_sub_title}
              </p>

              <button
                style={{
                  backgroundColor: "darkblue",
                  color: "white",
                  height: "50px",
                  width: "150px",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Start Selling
              </button>
              <p className="vendor-main-para2">
                {data?.seller_footer_heading}
              </p>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{}}
              className="vendor-secondimgsec">
              <img
                src={data?.footer_seller_image}
                width="75%"
                height="75%"
                className="vendor-secondimg"
              />
            </Grid>
          </Grid>

        </>)}
  </>);
  };

  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Seller Terms` : "Loading..."}
        image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <OuterContainer />
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };