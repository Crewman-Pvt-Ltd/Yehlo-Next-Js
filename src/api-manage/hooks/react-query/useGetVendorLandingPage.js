import { useQuery } from "react-query";
import { vendor_landing } from "../../ApiRoutes";
import {
  onErrorResponse,
  onSingleErrorResponse,
} from "../../api-error-response/ErrorResponses";
import MainApi from "../../MainApi";
const getVendorLandingPage = async () => {
  const { data } = await MainApi.get(`${vendor_landing}`);
  return data;
};

export default function useGetVendorLandingPage() {
  return useQuery(
    ["vendorLanding"],
    () => getVendorLandingPage(),
    {
      enabled: false,
      onError: onSingleErrorResponse,
    }
  );
}
