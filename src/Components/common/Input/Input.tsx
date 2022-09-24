import React from "react";

import IInputPropInterface from "../../../Core/PropInterface/IInputProps";

const Input:React.FC<IInputPropInterface> = ({ className, type, placeholder }):JSX.Element => {
  return <input placeholder={placeholder} className={className} type={type} />;
};

export default Input;
