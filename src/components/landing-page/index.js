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
import LocationPopup from "./LocationPopup";
import HeroSection from "./hero-section/HeroSection";

const LandingPage = () => {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down(600));
  const { t } = useTranslation();
  const router = useRouter();
  const [openLocationPopup, setOpenLocationPopup] = useState(true);
  const [location, setLocation] = useState(undefined);
  const [geoLocationEnable, setGeoLocationEnable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(undefined);
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [zoneIdEnabled, setZoneIdEnabled] = useState(false);
  const [isSelectedByGps, setIsSelectedByGps] = useState(false);
  const dispatch = useDispatch();

  const {
    coords,
    isGeolocationEnabled,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

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
      router.push("/");
    }
  }, [location, currentLocation, isSelectedByGps]);

  return (
    <>
    <HeroSection></HeroSection>
    <Box>
      <LocationPopup
        open={openLocationPopup}
        handleClose={() => {}}
        handleCurrentLocation={handleCurrentLocation}
        handleManualInput={() => {}}
      />
    </Box>
    </>
  );
};

export default LandingPage;