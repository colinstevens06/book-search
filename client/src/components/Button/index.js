import React from "react";
// import { PromiseProvider } from "mongoose";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, click, value }) {
  return (
    <button
      onClick={click}
      className={["btn btn-lg", `btn-${type}`, className].join(" ")}
      value={value}
    >
      {children}
    </button>
  );
}

export default Button;
