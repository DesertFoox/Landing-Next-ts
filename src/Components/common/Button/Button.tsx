import React from "react";

import IButtonPropInterface from "../../../Core/PropInterface/IButtonPropInetrface";
const Button: React.FC<IButtonPropInterface> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
