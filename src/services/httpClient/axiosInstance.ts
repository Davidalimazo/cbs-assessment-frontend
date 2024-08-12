import { appConfig } from "@/lib/app_config";
import httpClient, { AxiosResponse } from "axios";
import { ErrorHandler } from "./errorHandler";

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const axios = httpClient.create({
  baseURL,
  timeout: appConfig.httpTimeout,
});

const successHandler = (response: AxiosResponse) => {
  return response;
};

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => Promise.reject(error)
);

export const Axios = httpClient.create({
  baseURL,
  timeout: appConfig.httpTimeout,
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => successHandler(response),
  async function (error) {
    return ErrorHandler(error);
  }
);

export default Axios;
