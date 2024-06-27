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
import useGetDeliverymanLandingPage from "../../src/api-manage/hooks/react-query/useGetDeliverymanLandingPage";
const Index = ({ configData, landingPageData }) => {
  const boxxstyle = () => ({
    margin: "0 10px",
    width: "20%",
    height: "200px",
  });

  const { data, refetch, isFetching } = useGetDeliverymanLandingPage();
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
       {data && (
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
              src={data?.delivery_head_image}
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
            {data?.delivery_heading}
            </h1>
            <p className="deliverypartner-main-para2">
            {data?.delivery_sub_heading}
            </p>
           
          </Grid>
        </Grid>

        {data?.delivery_promotion?.main_heading != null &&
              data?.delivery_promotion?.promotional_data?.length > 0 && (
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
                {data?.delivery_promotion?.main_heading}
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
               {data?.delivery_promotion?.promotional_data?.length > 0 &&
                        data?.delivery_promotion?.promotional_data?.map((item, index) => (
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
                    src={item?.image}
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
                    {item?.title}
                  </p>
                  <p style={{ color: "black", fontSize: "16px" }}>
                  {item?.sub_title}
                  </p>
                </Box>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
              )}


             
        {data?.delivery_faqs != null &&
              data?.delivery_faqs?.length > 0 && ( 
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
          {data?.delivery_faqs.length > 0 &&
                        data?.delivery_faqs.map((faq, index) => (
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
                {faq?.question}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  fontSize: "14px",
                  color: "black",
                  textAlign: "left",
                }}

                dangerouslySetInnerHTML={{ __html: `${faq?.answer}` }}
              >
                {faq?.answer}
                
              </div>
            </AccordionDetails>
          </Accordion>
           ))}
        </Grid>
  )}

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
            {data?.delivery_footer_heading}
            </h1>
            <p className="vendor-main-para1">
            {data?.delivery_footer_sub_heading}
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
            {data?.sub_head_2}
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
              src={data?.delivery_footer_image}
              width="70%"
              height="450px"
              className="vendor-secondimg"
            />
          </Grid>
        </Grid>

       
      </>
      )}
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
