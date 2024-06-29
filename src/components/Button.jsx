import PropTypes from "prop-types";

const Button = ({ children, variant }) => <button className={`btn btn-${variant}`}>{children}</button>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

export default Button;
