import React from "react";

import IFormInputProps from "../../../Core/PropInterface/IFormInputProps";

const FormInput: React.FC<IFormInputProps> = ({
  children,
  type,
  placeholder,
  registerName,
  register,
}): JSX.Element => {
  return (
    <>
      <p className="text-[#222] text-[14px]">{children}</p>
      {register ? (
        <input
          {...register(registerName)}
          type={type}
          className="border-b border-[#E5E5E5] py-3 text-[13px] outline-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="border-b border-[#E5E5E5] py-3 text-[13px] outline-none"
          placeholder={placeholder}
        />
      )}
    </>
  );
};

export default FormInput;
