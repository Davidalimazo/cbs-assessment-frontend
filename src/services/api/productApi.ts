import { apiRequestParams } from "@/interfaces/layout_interface";
import { Axios } from "../httpClient/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/constants";

export const useGetProductsListApi = ({
  enabled,
  onSuccess,
}: apiRequestParams & { enabled: boolean }) => {
  const { data, isLoading: isFetching } = useQuery({
    queryKey: [queryKeys.getProductsList],
    queryFn: async () => {
      const { data } = await Axios.get(`/products`);
      return data;
    },
    enabled,
    onSuccess,
  });
  return {
    data,
    isFetching,
  };
};
