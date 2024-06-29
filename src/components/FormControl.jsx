import PropTypes from "prop-types";

const FormControl = ({ label, children }) => (
  <div className="form-control">
    <label className="form-control-label">{label}</label>
    {children}
  </div>
);

FormControl.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormControl;
