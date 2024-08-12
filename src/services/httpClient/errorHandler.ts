import { UnknownObjectType } from '@/interfaces/layout_interface';
import axios from 'axios';
import { toast } from 'react-toastify';


export const ErrorHandler = async (error: any) => {
  //Network error
  if (typeof window !== 'undefined' && !window.navigator.onLine) {
  }

  const originalRequest = error.config;
  let status = error.response.status;

  let message = '';
  let defaultMessage = 'Something went wrong, please try again.';
  if (error?.response) {
    if (status >= 500 && status < 600) {
      toast.error(defaultMessage);
      return Promise.reject(error);
    }
    if (status.toString().startsWith('4')) {
      if (status === 404) {
        message = error.response.data.message;
        return { message, status };
      } else {
        let errorToReturn = '';
        if (typeof error === 'string') {
          errorToReturn = error;
        } else if (error?.response?.data?.error) {
          if (typeof error?.response?.data?.error === 'string') {
            errorToReturn = error?.response?.data?.error;
          } else {
            errorToReturn =
              (Object.values(
                error?.response?.data?.error as UnknownObjectType
              )[0] as string) || defaultMessage;
          }
        } else {
          errorToReturn =
            (Object.values(error as UnknownObjectType)[0] as string) || defaultMessage;
        }
        return Promise.reject(errorToReturn);
      }
    }
  } else {
    message = error?.message || defaultMessage;
  }
  return { message };
};


export const isHttpNotFound = (error: any) => error?.status?.toString() === '404';
