import React from "react";

import {
  ISelectOptionProps,
  IOptionDto,
} from "../../../Core/PropInterface/ISelectOptionProps";

const SelectOption: React.FC<ISelectOptionProps> = ({
  label,
  className,
  options,
}): JSX.Element => {
  return (
    <>
      <p className="text-[#222] text-[14px]">{label}</p>
      <select
        className={`border-b border-[#E5E5E5] py-3 text-[13px] ${className}`}
      >
        {options.map((opt: IOptionDto,index:number) => (
          <option key={index} defaultValue={opt.name} value={opt.value} disabled>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
