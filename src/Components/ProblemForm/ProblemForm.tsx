import React from "react";

import Button from "../common/Button/Button";
import FormInput from "../common/FormInput/FormInput";
import SelectOption from "../common/SelectOption/SelectOption";
import TextArea from "../common/TextArea/TextArea";

import IProblemFormProps from "../../Core/PropInterface/IProblemFormProps";

import FormOption from "../../Constant/FormOption.json";
import DynamicFormhandler from "../../Utils/DynamicFormhandler";

const ProblemForm: React.FC<IProblemFormProps> = ({ form }): JSX.Element => {
  return (
    <div className="bg-gradient-to-t from-[#E2F2FF] to-[#E7F4FF]">
      <div className="max-w-7xl mx-auto flex flex-col items-center pt-16 pb-[60px] relative form-container">
        <h2 className="text-[#222] text-[36px]">Facing Problem? </h2>
        <h2 className="text-[#222] text-[36px]">Lets Get In Touch Now</h2>

        <div className="w-[668px] pt-[60px] bg-white rounded-xl mt-12 px-[52px] pb-[48px]">
          <div className="grid grid-cols-2 gap-9">
            {DynamicFormhandler(form)}
          </div>
          <Button className="w-[145px] h-[48px] bg-gradient-to-r  from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 mt-6 text-md rounded text-white">
            Our Works
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProblemForm;
