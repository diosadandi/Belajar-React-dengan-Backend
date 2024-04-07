import useHTTP from "./useHTTP.jsx";
import useChangeListener from "./useChangeListener.jsx";
import useJWT from "./useJWT.jsx";
import useMessage from "./useMessage.jsx";
import useFormatter from "./useFormatter.jsx";
import {BASE_URL} from "../config/settings.js";


const useModule = () => {
  const http = useHTTP();
  const changeListener = useChangeListener();
  const jwt = useJWT();
  const message = useMessage();
  const formatter = useFormatter();

  const configHTTP = (params) => {
    return {
      headers: {
        Authorization: jwt.get(),
      },
      params,
    }
  }

  return {
    http,
    changeListener,
    jwt,
    message,
    formatter,
    baseURL: BASE_URL,
    configHTTP
  }
}

export default useModule;