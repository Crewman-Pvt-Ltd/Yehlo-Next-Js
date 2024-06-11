import MainApi from "api-manage/MainApi";
import { nearest_store_time } from "api-manage/ApiRoutes";
import { useEffect, useState } from "react";


const NearestStoreTime = () => {

    const [data, setData] = useState({});
    const currentLatLng = JSON.parse(localStorage.getItem("currentLatLng"));

    const getNearestStoreTime = async () => {
        const { data } = await MainApi.get(`${nearest_store_time}?user_lat=${currentLatLng?.lat}&user_lng=${currentLatLng?.lng}`);
        setData(data);
    }

    useEffect(() => {
        getNearestStoreTime();
    }, []);

    return (
       <span>Delivery in {data?.nearStore?.distance_time}</span>
    );
};

export default NearestStoreTime;