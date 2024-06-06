import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
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
    height: "200px",
  });

  const { data, refetch, isFetching } = useGetVendorLandingPage();
  useEffect(() => {
    refetch();
  }, []);

  const { t } = useTranslation();
  const DeliveryPartner = () => {
    const slidersettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Grid
          container
          sx={{
            backgroundImage: "linear-gradient(to bottom, white, white)",
            height: "500px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="deliverypartner-firstimgsec"
          >
            <img
              src="https://yehloapp.com/static/ezgif.png"
              height="500px"
              width="80%"
              className="deliverypartner-firstimg"
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              padding: { xs: "0rem 1rem 0rem 1rem", md: "7rem 0rem 0rem 0rem" },
            }}
          >
            <h1 className="deliverypartner-main-para1">
              Earn upto ₹ 50,000 with Yehlo Delivery. JOIN NOW!
            </h1>
            <p className="deliverypartner-main-para2">
              JOINING BONUS of upto ₹ 4,000 | Upto ₹ 10 lacs medical insurance
            </p>
            {/* <form
              style={{
                backgroundColor: "white",
                width: "60%",
                height: "350px",
                borderRadius: "10px",
                padding: "20px 30px 20px 30px",
                marginTop: 200,
                marginLeft:100,
              }}
            >
              <h1>Become a Yehlo rider</h1>
              <p>To deliver orders for Blinkit, please fill this form</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    placeholder="Name"
                    style={{
                      flex: "1",
                      padding: "15px",
                      borderRadius: "5px",
                      backgroundColor: "#80808026",
                      border: "none",
                      outline: "none",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    style={{
                      flex: "1",
                      padding: "15px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#80808026",
                      outline: "none",
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="City"
                  style={{
                    width: "100%",
                    padding: "15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#80808026",
                    outline: "none",
                  }}
                />
                <input
                  type="submit"
                  value="Join to earn"
                  style={{
                    width: "30%",
                    padding: "15px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer",
                    margin: "auto",
                    display: "block",
                    fontSize: "15px",
                    backgroundColor: "#010d75",
                  }}
                />
              </div>
            </form> */}
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            textAlign: { xs: "left", md: "center" },
            marginTop: { xs: "0", md: "3rem" },
            backgroundColor: "white",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              padding: { xs: "0 20px", md: "0" },
            }}
          >
            <h1
              style={{
                fontSize: "25px",
                color: "black",
              }}
            >
              Join India’s most loved quick commerce platform
            </h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} sx={{}}>
            <Grid
              container
              sx={{
                padding: { xs: "", md: "0 10rem" },
                marginTop: "2rem",
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
                    height: { xs: "300px", md: "280px" },
                    width: { xs: "85%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <img
                    src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png"
                    height="90px"
                    width="40%"
                  />
                  <p
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Monthly earnings
                  </p>
                  <p style={{ color: "black", fontSize: "16px" }}>
                    Earn upto ₹50,000 with incentives and other benefits
                  </p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: { xs: "8px", md: "0" },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "300px", md: "280px" },
                    width: { xs: "85%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <img
                    src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png"
                    height="90px"
                    width="40%"
                  />
                  <p
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Monthly earnings
                  </p>
                  <p style={{ color: "black", fontSize: "16px" }}>
                    Earn upto ₹50,000 with incentives and other benefits
                  </p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: { xs: "8px", md: "0" },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "300px", md: "280px" },
                    width: { xs: "85%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <img
                    src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png"
                    height="90px"
                    width="40%"
                  />
                  <p
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Monthly earnings
                  </p>
                  <p style={{ color: "black", fontSize: "16px" }}>
                    Earn upto ₹50,000 with incentives and other benefits
                  </p>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: { xs: "8px", md: "0" },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "300px", md: "280px" },
                    width: { xs: "85%", md: "90%" },
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: { xs: "20px 30px", md: "20px 30px" },
                    borderRadius: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "center" },
                  }}
                >
                  <img
                    src="https://blinkit.com/careers/sites/default/files/2021-12/deliver-icon-earnings.png"
                    height="90px"
                    width="40%"
                  />
                  <p
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Monthly earnings
                  </p>
                  <p style={{ color: "black", fontSize: "16px" }}>
                    Earn upto ₹50,000 with incentives and other benefits
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              padding: { xs: "0 20px", md: "0" },
            }}
          >
            <h1
              style={{
                fontSize: "25px",
                color: "black",
              }}
            >
              Frequently asked questions
            </h1>
          </Grid>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Who are Yehlo delivery partners?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                They are independent contractors who partner with Yehlo to pick
                up grocery items ordered by consumers on the Yehlo app and
                deliver those items to the convenience of the consumers
                doorstep. They use their own 2-wheelers to make these deliveries
                and pick their own schedule
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                What are the work timings?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                The working hours are flexible and you have an option to choose
                your own slots. We are happy to share more information at the
                time of your interview
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                When will I start getting the orders to deliver?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                Once you submit all the required documents and your registration
                is complete with us, our team will run a background verification
                check. On successful clearance of the same and completion of the
                onboarding and delivery training module, you will be eligible to
                start working and delivering orders with us
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                What is the mode of payment?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                The earnings you make will be transferred into your bank account
                on a weekly basis
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Do I get any bonuses?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                Yes, we offer two kinds of bonuses: <br />
                1- Joining Bonus: once you join us and complete a certain number
                of order deliveries within a specified time frame, you will
                receive this bonus.
                <br />
                2-Referral Bonus: you can refer your friends to become our
                delivery partners to avail this bonus
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign :"left",
                }}
              >
                Are there any specific requirements I need to meet to become a
                delivery partner with Blinkit?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign :"left",
                }}
              >
                Yes, here’s a quick list for your reference:
                <br />
               1- Be 18 years of age or older
                <br />
                2-Own a two-wheeler
                <br />
               3- Own an Android phone with an active internet connection
                <br />
               4- Have a valid driving license, registration certificate (RC),
                insurance certificate and PAN (Permanent Account Number) card
                <br />
               5- Have an address proof and active bank account
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "100%", md: "60%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div
                style={{
                  fontSize: "19px",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                How much can I earn?
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                We follow the ‘per packet model’, wherein, your earnings will be based on every delivery you make.
                 Plus, you also get additional incentives based on the weight you carry and the distance you cover
              </div>
            </AccordionDetails>
          </Accordion>
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
            marginTop: "2rem",
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
            <h1 className="deliverypartner-main-heading">
              Start your Delivery Partner Journey
            </h1>
            <p className="vendor-main-para1">
              Join our family of 12 Lakh+ Delivery Partner who Deliver on Yehlo
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
              Start Deliver
            </button>
            <p className="vendor-main-para2">
              It takes only 15 minutes to setup your account
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{}}
            className="vendor-secondimgsec"
          >
            <img
              src="https://yehloapp.com/static/vendor-upper.png"
              width="70%"
              height="450px"
              className="vendor-secondimg"
            />
          </Grid>
        </Grid>

        {/* <center>

          <h1 className="deliverypartnertestimonal">Partner testimonials</h1>
          <Slider {...slidersettings} className="deliverypartnerimgsec">
            <img
              className="driverpartnerimg"
              src="https://blinkit.com/careers/sites/default/files/2023-02/Group%2023335.png"
            />
            <img
              className="driverpartnerimg"
              src="https://blinkit.com/careers/sites/default/files/2023-02/Group%2023344.png"
            />
            <img
              className="driverpartnerimg"
              src="https://blinkit.com/careers/sites/default/files/2023-02/Group%2023335.png"
            />
            <img
              className="driverpartnerimg"
              src="https://blinkit.com/careers/sites/default/files/2023-02/Group%2023344.png"
            />
          </Slider>
        </center> */}
      </>
    );
  };

  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Delivery Partner` : "Loading..."}
        image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <DeliveryPartner />
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };
