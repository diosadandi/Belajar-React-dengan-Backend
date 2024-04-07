import axios from "axios";
import {useContext, useState} from "react";
import {ContextApplication} from "../config/contexts.js";
import {TOKEN_KEY} from "../config/settings.js";

const useHTTP = () => {
  const application = useContext(ContextApplication);

  const privateHTTP = axios.create({
    timeout: 25000
  })

  const publicHTTP = axios.create({
    timeout: 25000
  })

  privateHTTP.interceptors.request.use(
    (config) => {
      application.loading.start()
      application.setIsAuthenticated(true);
      return config;
    },
    (error) => {
      application.loading.reset()
      return Promise.reject(error);
    }
  )

  privateHTTP.interceptors.response.use(
    (response) => {
      application.loading.reset()
      return response;
    },
    (error) => {
      application.loading.reset()
      const { status } = error.response
      if (status && status === 401) {
        sessionStorage.setItem(TOKEN_KEY, "");
        application.setIsAuthenticated(false);
      }
      return Promise.reject(error);
    }
  )

  return {
    privateHTTP,
    publicHTTP
  }
}

export default useHTTP;