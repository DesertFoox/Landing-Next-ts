import React from "react";

import {
  ISelectOptionProps,
  IOptionDto,
} from "../../../Core/PropInterface/ISelectOptionProps";

const SelectOption: React.FC<ISelectOptionProps> = ({
  label,
  className,
  options,
  register,
  registerName
}): JSX.Element => {
  return (
    <>
      <p className="text-[#222] text-[14px]">{label}</p>
      <select
        {...register(registerName)}
        value={options[0].value}
        className={`border-b border-[#E5E5E5] py-3 text-[13px] outline-none ${className}`}
      >
        {options.map((opt: IOptionDto, index: number) => (
          <option key={index} >
            {opt.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
