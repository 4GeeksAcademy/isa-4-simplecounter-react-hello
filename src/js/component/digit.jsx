import React from "react";
import PropTypes from "prop-types";

export const Digit = ({ digitValue }) => (
    <div className="digit">{digitValue}</div>
);


Digit.propTypes = {
    digitValue: PropTypes.number.isRequired, 
};