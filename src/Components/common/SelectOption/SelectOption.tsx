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
        {options.map((opt: IOptionDto) => (
          <option value={opt.value} disabled selected>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
