import PropTypes from "prop-types";

const Input = ({ name, placeholder, required, type, onChange, value }) => (
  <input
    type={type}
    required={required}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    className="w-full p-2.5 rounded-md bg-transparent text-secondary-50 border border-primary-600 placeholder:text-secondary-300 outline-none transition-all focus:bg-primary-800"
  />
);

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
