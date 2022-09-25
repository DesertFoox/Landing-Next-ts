import React from "react";

import ITextAreaProps from "../../../Core/PropInterface/ITextAreaProps";

const TextArea: React.FC<ITextAreaProps> = ({ label, className, placeholder }): JSX.Element => {
  return (
    <>
      <p className="text-[#222] text-[14px]">{label}</p>
      <textarea
        className={`max-h-[100px] text-[13px] min-h-[100px] ${className}  mt-3 outline-none`}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
