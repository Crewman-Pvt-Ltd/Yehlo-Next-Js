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
            backgroundImage:
              "url('https://m.media-amazon.com/images/G/01/sell/images/colors/blue50-100.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: 800, md: 420 },
            width: { xs: "auto", md: "100%" },
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
            <p className="vendor-main-para1">Yehlo Seller Fees and Pricing</p>
            <h1 className="vendor-main-heading">
              Fees and Pricing for Yehlo Sellers
            </h1>
            <p className="vendor-main-para2">
              Sell on yehlo and get a chance to receive benefits worth
              ₹25,000*
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
              src="https://yehloapp.com/static/freepik-export-20240603114618RdiP.png"
              width="100%"
              height="100%"
              className="vendor-firstimg"
            />
          </Grid>
        </Grid>

        <Grid
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
             Factors Influencing Seller Fees and Pricing on yehlo
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{}}>
            <Grid
              container
              sx={{
                padding: { xs: "", md: "0 60px" },
              }}
            >
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
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      marginBottom: 30,
                    }}
                  >
                    REFERRAL FEES/ SELL ON YEHLO FEES
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Product category based fees
                  </p>
                  <p style={{ color: "gray", fontSize: "15px" }}>
                   Upto 25%, varies based on product category
                  </p>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center", 
                  marginTop: { xs: "8px", md: "0"},
                }}
              >
                <Box
                  sx={{
                    height: { xs: "200px", md: "270px" },
                    width: { xs: "90%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      marginBottom: 30,
                    }}
                  >
                    CLOSING FEES
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                   Based on price of item sold
                  </p>
                  <p style={{ color: "gray", fontSize: "15px" }}>
                  starts at ₹ 5, Varies by product price range and fulfillment channel
                  </p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center", 
                  marginTop: { xs: "8px", md: "0"},
                }}
              >
                <Box
                  sx={{
                    height: { xs: "200px", md: "270px" },
                    width: { xs: "90%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      marginBottom: 30,
                    }}
                  >
                    WEIGHT HANDLING FEES
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Fees for Shipping/Delivery
                  </p>
                  <p style={{ color: "gray", fontSize: "15px" }}>
                  starts at Rs. 29 per item shipped, varies by item volume & distance
                  </p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex", justifyContent: "center", 
                  marginTop: { xs: "8px", md: "0"},
                }}
              >
                <Box
                  sx={{
                    height: { xs: "200px", md: "270px" },
                    width: { xs: "90%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      marginBottom: 30,
                    }}
                  >
                    OTHER FEES
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Based on program/service
                  </p>
                  <p style={{ color: "gray", fontSize: "15px" }}>
                  Only applicable for certain Fulfillment Channel, and/or optional programs or services subscribed to
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


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
              Yehlo Payment Cycles
            </h1>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { md: "0 50px 0 50px"  ,xs: "0 10px 0 10px"},
              color: "black",
            }}
          >
            <p className="">
              You are eligible to get paid for the order 7 days after the order
              is delivered. yehlo ensures payment for your sales (minus the
              Yehlo Seller fees) is deposited securely into your bank account
              every 7 days, including your Pay on Delivery orders. Eligible
              sellers will also receive options for faster payment cycles.
            </p>

            <p className="">
              You can view your deposited balance along with tips to grow and
              expand your business in your Seller Central account.
            </p>
            {/* <Grid  item
            xs={12}
            sm={12}
            md={12}>
                 <img
              src="https://images.ctfassets.net/wob906kz2qeo/4wp1gjo1gsZhZA4Rz1mePc/cd7483a326b46dd6271e3d0f6521930d/Payments-Blog.png"
              width="100%"
              height="70%"
              className="vendor-firstimg"
            />
            </Grid> */}
            <p className="">
              NOTE: The above information is applicable for new sellers who will
              join the "Standard" level in the yehlo STEP program. As sellers
              move up levels, they will be able to unlock multiple benefits
              including fee waivers, account management faster disbursement
              cycles, & more.
            </p>
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
            <h1 className="vendor-main-heading">Start your Seller Journey</h1>
            <p className="vendor-main-para1">
              Join our family of 12 Lakh+ businesses who sell on Yehlo
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
              It takes only 15 minutes to setup your account
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{}}
           className="vendor-secondimgsec">
            <img
              src="https://yehloapp.com/static/vendor-upper.png"
              width="90%"
              height="80%"
              className="vendor-secondimg"
            />
          </Grid>
        </Grid>

        {/* <Grid>
          <Grid
            item
            container
            direction="column"
            textAlign="center"
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "#250a5d24",
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
        </Grid> */}
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