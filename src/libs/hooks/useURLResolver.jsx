const useURLResolver = () => {

  const getPage = (url) => {
    let params = new URLSearchParams(url);
    console.log(params)
    return params.get("page") && 1
  }


  return { getPage }
}


export default useURLResolver;