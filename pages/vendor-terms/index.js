import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import { Box, fontSize, padding, textAlign, width } from "@mui/system";
import { Typography } from "@mui/material";
import { CustomStackFullWidth } from "../../src/styled-components/CustomStyles.style";
import LogoSide from "../../src/components/logo/LogoSide";
import { Grid } from "@mui/material";
import AppLinks from "../../src/components/footer/footer-middle/AppLinks";
import Slider from "react-slick";
import { SliderCustom } from "../../src/styled-components/CustomStyles.style";
import useGetVendorLandingPage from "../../src/api-manage/hooks/react-query/useGetVendorLandingPage";


const imageUrls = [
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c13107e3f.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c07fe7238.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c0169e405.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c16647b39.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264bf928d116.png",
];
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

  const ImageGrid = ({ imageUrls }) => {
    return (
      <Slider
        className="custom-slider"  // Add custom classname
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={2.2}
        slidesToScroll={1}
        adaptiveHeight={true}
        responsive={[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]}
      >
        {imageUrls?.map((url, index) => (
          <div key={index}>
            <img
              src={url?.image}
              alt={`Image ${index + 1}`}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        ))}
      </Slider>
    );
  };

  const OuterContainer = () => {
    return (
      <>
        <Grid
          container
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid>
            <h1 style={{ color: "black", fontWeight: "500" }}>
              {data?.fixed_header_title}
            </h1>
          </Grid>
          <Grid>
            <LogoSide
              width="110px"
              height="50px"
              configData={configData}
              objectFit="contain"
            />
          </Grid>
          <Grid>
            <h1 style={{ color: "gray", fontSize: "15px", fontWeight: "400" }}>
              {data?.fixed_header_sub_title}
            </h1>
          </Grid>
          <Grid>
            <img
              src="https://yehlo.app/storage/app/public/promotional_banner/2024-05-29-66573183c53c2.png"
              width="100%"
            />
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "8px" }}>
          <Grid
            item
            container
            direction="column"
            textAlign="center"
            sx={{
              backgroundColor: "#b6adff0f",
              padding: "20px",
              height: "105%",
            }}
          >
            <Grid item>
              <h1>{data?.earning_title}</h1>
            </Grid>
            <Grid
              item
              sx={{
                fontSize: "15px",
              }}
            >
              <p>{data?.earning_sub_title}</p>
            </Grid>

            <Grid item container spacing={2} sx={{ paddingTop: "50px" }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/earning/2023-06-11-648593813b6c1.png"
                  style={{ height: "110%", width: "100%" }}
                  alt="Description of the image"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Grid>
                  <p
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Become a best
                  </p>
                  <h2>Seller</h2>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container spacing={2} sx={{ paddingTop: "60px" }}>
              <Grid item xs={12} sm={6} md={3}>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    Become a smart
                  </p>
                  <h2>Deliveryman</h2>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={9}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/earning/2023-06-11-648593d069147.png"
                  style={{ height: "110%", width: "100%" }}
                  alt="Description of the image"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            textAlign: "center",
            backgroundColor: "#b6adff0f",
            marginTop: "50px",
            height: "400px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              alignItems: "center",
              paddingTop: "100px",
            }}
          >
            <h1>Earn point by</h1>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Refer Your Friend
              <br />
            </p>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <img
              src="https://www.earnnest.me/assets/images/referal-friend.svg"
              width="80%"
              height="80%"
              alt="Description of the image"
            />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid sx={{ marginTop: 2 }}>
            <h1 style={{ color: "black", fontWeight: "500" }}>
              What's so Special About Yehlo?
            </h1>
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              marginTop: 2,
              justifyContent: "center",
              alignItems: "center",
              // textAlign: "center",
            }}
          >
            <Box
              item
              xs={4}
              style={{ backgroundColor: "#e3ffe4" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-6485947e23f21.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    padding: "30px 20px"
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Manage Multiple Store</h2>
              </Grid>
            </Box>

            <Box
              item
              xs={4}
              style={{ backgroundColor: "#dcf3fa" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-648594f693558.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    paddingLeft: "20px",
                    paddingTop: "30px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Manage Parcel Delivery</h2>
              </Grid>
            </Box>
            <Box
              item
              xs={4}
              style={{ backgroundColor: "#e6ffd1" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-6485951594d27.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    paddingLeft: "20px",
                    paddingTop: "30px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Manage E-Commerce</h2>
              </Grid>
            </Box>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              marginTop: 2,
              justifyContent: "center",
              alignItems: "center",
              // textAlign: "center",
            }}
          >
            <Box
              item
              xs={4}
              style={{ backgroundColor: "#fae1f9" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-6485952ae14bf.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    paddingLeft: "20px",
                    paddingTop: "30px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Manage Location Tracking</h2>
              </Grid>
            </Box>

            <Box
              item
              xs={4}
              style={{ backgroundColor: "#e1faf4" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-6485954791af5.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    paddingLeft: "20px",
                    paddingTop: "30px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Manage Grocery Business</h2>
              </Grid>
            </Box>
            <Box
              item
              xs={4}
              style={{ backgroundColor: "#fae5d2" }}
              sx={boxxstyle()}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                }}
              >
                <img
                  src="https://6ammart-admin.6amtech.com/storage/app/public/special_criteria/2023-06-11-6485955c733b1.png"
                  alt="Description of the image"
                  style={{
                    height: "50%",
                    width: "40%",
                    paddingLeft: "20px",
                    paddingTop: "30px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                <h2 style={{}}>Easy to Get Help & Support</h2>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            // textAlign: "center",
            backgroundColor: "#b6adff0f",
            marginTop: "50px",
            height: "400px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              paddingLeft: "80px",
              paddingTop: "40px",
            }}
          >
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ fontSize: "50px", marginBottom: "0" }}>
                {data?.download_user_app_title}
              </h1>
              <p
                style={{ fontSize: "30px", fontWeight: "500", marginTop: "0" }}
              >
                {data?.download_user_app_sub_title}
              </p>
            </Grid>
            <Grid
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid item xs={12} sm={6} md={3}>
                <CustomStackFullWidth gap="0px" justifyContent="flex-start">
                  {(Number.parseInt(
                    landingPageData?.download_user_app_links
                      ?.playstore_url_status
                  ) === 1 ||
                    Number.parseInt(
                      landingPageData?.download_user_app_links
                        ?.apple_store_url_status
                    ) === 1) && (
                      <Box
                        sx={{
                          width: {
                            sm: "50%",
                            md: "100%",
                          },
                          marginTop: {
                            sm: "0",
                            md: "15px",
                          },
                        }}
                      >
                        <AppLinks
                          configData={configData}
                          changeSingle
                          landingPageData={landingPageData}
                        />
                      </Box>
                    )}
                </CustomStackFullWidth>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src="https://6ammart-admin.6amtech.com/storage/app/public/download_user_app_image/2023-06-11-648596096d79e.png"
              width="80%"
              height="80%"
              alt="Description of the image"
            />
          </Grid>
        </Grid>



        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ImageGrid imageUrls={data?.promotion_banners} />
          </Grid>
        </Grid>


        <Grid container sx={{
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          padding: "10px 30px"
        }} spacing={2}>

          <Grid>
            <div dangerouslySetInnerHTML={{ __html: data?.terms_and_conditions }}></div>
          </Grid>
        </Grid>
      </>
    );
  };

  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Vendor Terms` : "Loading..."}
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