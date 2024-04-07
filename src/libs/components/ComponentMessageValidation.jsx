import PropTypes from "prop-types";

const ComponentMessageValidation = ({ messages }) => {
  return (
    <>
      {messages?.map((message, index) => (
        <small key={index} className={"d-block text-danger"}>
          {message}
        </small>
      ))}
    </>
  )
}

ComponentMessageValidation.propTypes = {
  messages: PropTypes.array
}

export default ComponentMessageValidation;