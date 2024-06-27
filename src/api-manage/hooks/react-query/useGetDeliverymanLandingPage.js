import { useQuery } from "react-query";
import { delivery_landing } from "../../ApiRoutes";
import {
  onErrorResponse,
  onSingleErrorResponse,
} from "../../api-error-response/ErrorResponses";
import MainApi from "../../MainApi";
const getDeliverymanLandingPage = async () => {
  const { data } = await MainApi.get(`${delivery_landing}`);
  return data;
};

export default function useGetDeliverymanLandingPage() {
  return useQuery(
    ["deliverymanLanding"],
    () => getDeliverymanLandingPage(),
    {
      enabled: false,
      onError: onSingleErrorResponse,
    }
  );
}
