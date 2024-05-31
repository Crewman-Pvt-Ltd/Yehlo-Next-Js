import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../src/components/layout/MainLayout";
import PolicyPage from "../../src/components/policy-page";
import useGetPolicyPage from "../../src/api-manage/hooks/react-query/useGetPolicyPage";
import { getServerSideProps } from "../index";
import SEO from "../../src/components/seo";

const Index = ({ configData, landingPageData }) => {
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
      
      </MainLayout>
    </>
  );
};

export default Index;
export { getServerSideProps };