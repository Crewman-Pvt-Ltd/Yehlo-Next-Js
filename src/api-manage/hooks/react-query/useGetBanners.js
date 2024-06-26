import MainApi from "../../MainApi";
import { useQuery } from "react-query";
import { onSingleErrorResponse } from "../../api-error-response/ErrorResponses";
import { banners, top_banners } from "../../ApiRoutes";


const getBanners = async (type) => {
  const endpoint = type === "top-banners" ? top_banners : banners;
  const { data } = await MainApi.get(endpoint);
  return data;
};

export default function useGetBanners(type) {
  return useQuery(["banners", type], () => getBanners(type), {
    enabled: false,
    cacheTime: 300000,
    onError: onSingleErrorResponse,
  });
}
