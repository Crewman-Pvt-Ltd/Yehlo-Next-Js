import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import CssBaseline from "@mui/material/CssBaseline";
import MainLayout from "../../../src/components/layout/MainLayout";
import PolicyPage from "../../../src/components/policy-page";
import useGetPolicyPage from "../../../src/api-manage/hooks/react-query/useGetPolicyPage";
import {getServerSideProps} from "../../index";
import SEO from "../../../src/components/seo";

const Index = ({configData, landingPageData}) => {
    const {t} = useTranslation();
    const {data, refetch, isFetching} = useGetPolicyPage("/delivery-man/privacy-policy");
    useEffect(() => {
        refetch();
    }, []);
    return (
        <>
            <CssBaseline/>
            <SEO
                title={configData ? `Delivery Man Privacy Policy` : "Loading..."}
                image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
                businessName={configData?.business_name}
            />
            <MainLayout configData={configData} landingPageData={landingPageData}>
                <PolicyPage
                    data={data}
                    title={t("Delivery Man Privacy Policy")}
                    isFetching={isFetching}
                />
            </MainLayout>
        </>
    );
};

export default Index;
export {getServerSideProps}
