import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../common/Button/Button";

import IProblemFormProps from "../../Core/PropInterface/IProblemFormProps";

import DynamicFormhandler from "../../Utils/DynamicFormhandler";

import ProblemFormSchema from "../../Core/Validations/ProblemFormSchema";

const ProblemForm: React.FC<IProblemFormProps> = ({ form }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(ProblemFormSchema),
  });
  const onSubmit = (data: any) => console.log(errors);

  return (
    <div className="bg-gradient-to-t from-[#E2F2FF] to-[#E7F4FF]">
      <div className="max-w-7xl mx-auto flex flex-col items-center pt-16 pb-[60px] relative form-container">
        <h2 className="text-[#222] text-[36px]">Facing Problem? </h2>
        <h2 className="text-[#222] text-[36px]">Lets Get In Touch Now</h2>

        <div className="w-[668px] pt-[60px] bg-white rounded-xl mt-12 px-[52px] pb-[48px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-9">
              {DynamicFormhandler(form, register, errors)}
            </div>
            <Button
              onClick={(e) => onSubmit(e)}
              className="w-[145px] h-[48px] bg-gradient-to-r  from-[#6362D7] via-purple-500 to-[#FF8FE2] text-center px-4 py-2 mt-6 text-md rounded text-white"
            >
              Our Works
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProblemForm;
