import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";
import { Box, textAlign } from "@mui/system";
import { Typography } from "@mui/material";
import { CustomStackFullWidth } from "../../src/styled-components/CustomStyles.style";
import LogoSide from "../../src/components/logo/LogoSide";
import { Grid } from "@mui/material";
const imageUrls = [
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c13107e3f.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c07fe7238.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c0169e405.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c16647b39.png",
  "https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264bf928d116.png",
];
const Index = ({ configData, landingPageData }) => {
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
              Manage Your Daily Life in one platform
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
              More than just a reliable eCommerce platform
            </h1>
          </Grid>
          <Grid>
            <img
              src="https://yehlo.app/storage/app/public/promotional_banner/2024-05-29-66573183c53c2.png"
              width="100%"
            />
          </Grid>
        </Grid>
        {/* <Grid>
          <Grid
            container
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "#250a5d24",
            }}
          >
            <Grid>
              <h1 style={{ color: "black", fontWeight: "500" }}>
                Your eCommerce venture starts here !
              </h1>
            </Grid>

            <Grid>
              <h1
                style={{ color: "gray", fontSize: "15px", fontWeight: "400" }}
              >
                Enjoy all services in one platform
              </h1>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "10px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {imageUrls.map((imageUrl, index) => (
                <Grid item xs={2} key={index}>
                  <img src={imageUrl} width="50%" alt={`Image ${index + 1}`} />
                </Grid>
              ))}
              <Grid container spacing={{ md: 2 }}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  <p>
                 abc
                    <br />
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <img
                    src="https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c0169ee14.png"
                    width="100%"
                    height="90%"
                    alt="Description of the image"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{ md: 2 }}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  <p>
                   egf{" "}
                    <br />
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <img
                    src="https://6ammart-admin.6amtech.com/storage/app/public/module/2022-04-24-6264c0169ee14.png"
                    width="100%"
                    height="90%"
                    alt="Description of the image"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}

        
      </>
    );
  };

  const { t } = useTranslation();
  const { data, refetch, isFetching } = useGetPolicyPage("/vendor-terms");
  useEffect(() => {
    refetch();
    console.log(data);
  }, []);

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
