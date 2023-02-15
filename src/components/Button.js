import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const STYLES = ["btn-primary", "btn--outline"];
const SIZES = ["btn-medium", "btn--large"];

function Button({ children, type, onCLick, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/Travel_Website/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onCLick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
