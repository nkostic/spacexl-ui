import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, name, checked, onChange }) => (
  <label className="checkbox">
    {label}
    <input type="checkbox" name={name} onChange={onChange} checked={checked} />
    <span className="checkmark"></span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
