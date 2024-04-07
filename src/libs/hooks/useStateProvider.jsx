import {useReducer} from "react";
import ReducerObject from "../reducers/ReducerObject.jsx";

const useStateProvider = () => {
  const [state, dispatch] = useReducer(ReducerObject, {
    isAuthenticated: false
  })

  return {
    auth: {state, dispatch},
  }
}

export default useStateProvider;