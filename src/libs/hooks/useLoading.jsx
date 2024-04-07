import {useState} from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const start = () => setLoading(true);
  const reset = () => setLoading(false);

  const isLoading = () => loading;

  return {
    isLoading,
    start,
    reset,
  }
}

export default useLoading;