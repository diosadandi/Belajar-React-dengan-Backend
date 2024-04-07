
const useChangeListener = () => {

  const onChangeText = (e, getter, setter) => {
    const name = e.target.name;
    const value = e.target.value;

    setter({...getter, [name]: value})
  }

  const onChangeNumber = (e, getter, setter) => {
    const name = e.target.name;
    const value = e.target.value;
    setter({...getter, [name]: Number(value).toString()})
  }

  const changeText = (field, value, state, setState) => {
    setState({...state, [field]: value})
  }

  const changeNumber = (field, value, state, setState, decimal=false) => {
    if (decimal) {
      setState({...state, [field]: parseInt(Number(value).toString())})
    } else {
      setState({...state, [field]: parseFloat(Number(value).toString())})
    }
  }

  const textChange = (field, value, hook) => {
    hook.data.setState({...hook.data.state, [field]: value});
  }

  const numChange = (field, value, hook) => {
    value = parseInt(Number(value).toString())
    hook.data.setState({...hook.data.state, [field]: value})
  }

  const change = (field, value, hook, num) => {
    if (num) {
      numChange(field, value, hook)
    } else {
      textChange(field, value, hook)
    }
  }

  return {
    onChangeText,
    onChangeNumber,
    changeText,
    changeNumber,
    change,
  }
}

export default useChangeListener;