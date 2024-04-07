import {Alert} from "react-bootstrap";
import PropTypes from "prop-types";
import {useState} from "react";

const ComponentMessageNoFieldError = ({error}) => {
  const [show, setShow] = useState(true);
  
  if (!Object.hasOwn(error, "non_field_errors")) {
    return;
  }
  
  if (error['non_field_errors'].length <= 0) {
    return;
  }
  
  return (
    <Alert variant={"danger"} onClose={() => setShow(false)} dismissible>
      {error['non_field_errors']?.map((message, index) => (
        <small key={index} className={"d-block"}>
          {message}
        </small>
      ))}
    </Alert>
  )
}

ComponentMessageNoFieldError.propTypes = {
  error: PropTypes.object
}

export default ComponentMessageNoFieldError;