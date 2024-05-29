import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useGeolocated } from "react-geolocated";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import useGetGeoCode from "api-manage/hooks/react-query/google-api/useGetGeoCode";
import useGetZoneId from "api-manage/hooks/react-query/google-api/useGetZone";
import { useDispatch } from "react-redux";
import { setWishList } from "redux/slices/wishList";
import { useWishListGet } from "api-manage/hooks/react-query/wish-list/useWishListGet";
import { getToken } from "helper-functions/getToken";
import dynamic from "next/dynamic";
import LocationPopup from "./LocationPopup";
import HeroSection from "./hero-section/HeroSection";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import Banners from "./Banners";
import Registration from "./Registration";
import DiscountBanner from "./DiscountBanner";
import MapModal from "../Map/MapModal";

const LandingPage = ({ configData, landingPageData }) => {


  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down(600));
  const { t } = useTranslation();
  const router = useRouter();
  const [openMapModal, setOpenMapModal] = useState(false);
  const [openLocationPopup, setOpenLocationPopup] = useState(true);
  const [location, setLocation] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [geoLocationEnable, setGeoLocationEnable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(undefined);
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [zoneIdEnabled, setZoneIdEnabled] = useState(false);
  const [isSelectedByGps, setIsSelectedByGps] = useState(false);
  const dispatch = useDispatch();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));


  const Testimonials = dynamic(() => import("./Testimonials"), {
    ssr: false,
  });
  const handleClose = () => {
    const location = localStorage.getItem("location");
    const isModuleExist = localStorage.getItem("module");
    if (location) {
      isModuleExist && setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const handleCloseMapModal = () => {
    setOpenMapModal(false);
    setOpenLocationPopup(false);
    setCurrentLocation(localStorage.getItem("location"));
    console.log("Location from handleCloseMapModal", currentLocation);
    // onClose();
  };

  


  const handleOrderNow = () => {
    if (location) {
      if (location === "null") {
        setOpen(true);
      } else {
        router.push("/home", undefined, { shallow: true });
      }
    } else {
      setOpen(true);
    }
  };

  const {
    coords,
    isGeolocationEnabled,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    setLocation(JSON.stringify(localStorage.getItem("location")));
  }, []);

  const handleCurrentLocation = () => {
    if (coords) {
      setLocation({ lat: coords?.latitude, lng: coords?.longitude });
      setShowCurrentLocation(true);
      setGeoLocationEnable(true);
      setZoneIdEnabled(true);
      setIsSelectedByGps(true);
      setOpenLocationPopup(false);
    } else {
      setOpenLocationPopup(true);
    }
  };

  const {
    data: geoCodeResults,
    refetch,
    isRefetching,
    isLoading: isLoadingGeoCode,
  } = useGetGeoCode(location, geoLocationEnable);

  useEffect(() => {
    if (geoLocationEnable) {
      refetch();
    }
  }, [location]);

  useEffect(() => {
    if (geoCodeResults?.results && showCurrentLocation) {
      setCurrentLocation(geoCodeResults?.results[0]?.formatted_address);
    }
  }, [geoCodeResults, location]);

  const { data: zoneData } = useGetZoneId(location, zoneIdEnabled);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (zoneData) {
        localStorage.setItem("zoneid", zoneData?.zone_id);
      }
    }
  }, [zoneData]);

  const onSuccessHandler = (response) => {
    dispatch(setWishList(response));
  };
  const { refetch: wishlistRefetch, isLoading: isLoadingWishlist } =
    useWishListGet(onSuccessHandler);

  useEffect(() => {
    if (isSelectedByGps && location && currentLocation) {
      if (getToken()) {
        wishlistRefetch();
      }
      localStorage.setItem("location", currentLocation);
      localStorage.setItem("currentLatLng", JSON.stringify(location));
      toast.success(t("New location has been set."));
      router.push("/home");
    }
  }, [location, currentLocation, isSelectedByGps]);

  return (
    <>
      <Box>
        {location === (undefined || "null") ? (
          <LocationPopup
            open={openLocationPopup}
            handleClose={() => {}}
            handleCurrentLocation={handleCurrentLocation}
            handleManualInput={() => setOpenMapModal(true)}
          />
        ) : (<></>)}
        <HeroSection
          configData={configData}
          landingPageData={landingPageData}
          handleOrderNow={handleOrderNow} />
        <ComponentOne
          landingPageData={landingPageData}
          configData={configData}
          handleOrderNow={handleOrderNow}
        />
        {landingPageData?.promotion_banners?.length > 0 && (
          <Banners landingPageData={landingPageData} isSmall={isSmall} />
        )}
        <ComponentTwo
          configData={configData}
          landingPageData={landingPageData}
        />
        {(landingPageData?.earning_title ||
          landingPageData?.earning_sub_title ||
          landingPageData?.earning_seller_title ||
          landingPageData?.earning_seller_sub_title ||
          landingPageData?.earning_dm_title ||
          landingPageData?.earning_dm_sub_title) && (
            <Registration data={landingPageData} isSmall={isSmall} />
          )}
        {landingPageData?.fixed_promotional_banner && (
          <DiscountBanner
            bannerImage={`${landingPageData?.base_urls?.promotional_banner_url}/${landingPageData?.fixed_promotional_banner}`}
            isSmall={isSmall}
          />
        )}
        {openMapModal && (
          <MapModal open={openMapModal} handleClose={handleCloseMapModal} />
        )}
        {/* {(landingPageData?.business_title ||
          landingPageData?.business_sub_title ||
          landingPageData?.business_image) && (
          <AppDownloadSection
            configData={configData}
            landingPageData={landingPageData}
          />
        )} 
        {landingPageData?.testimonial_list?.length > 0 && (
          <Testimonials landingPageData={landingPageData} isSmall={isSmall} />
        )} */}
        {/* {open && (
          <MapModal
            open={open}
            handleClose={handleClose}
            coords={coords}
            disableAutoFocus
          />
        )} */}
      </Box>
    </>
  );
};

export default LandingPage;