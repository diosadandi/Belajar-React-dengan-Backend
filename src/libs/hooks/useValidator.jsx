import {useState} from "react";

const useValidator = (initialState) => {
  const [message, setMessage] = useState(initialState);

  const except = (error) => {
    const { data, status} = error.response;
    if (status === 400) {
      setMessage(data);
    }
  }

  const reset = () => {
    setMessage(initialState);
  }

  const get = (field) => message[field];

  const result = () => message;

  const isInvalidField = (field) => {
    const result = get(field);
    return !!result?.length
  }

  const primeInvalidField = (field) => {
    if (isInvalidField(field)) {
      return 'p-invalid'
    }

    return ''
  }

  return {except, result, get, reset, isInvalidField, primeInvalidField}
}

export default useValidator;