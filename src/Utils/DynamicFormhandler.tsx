import React from "react";

import IGetContactUsFormInterface from "../Core/Interface/IGetContactUsFormInterface";
import EnumFieldName from "../Core/Enum/EnumFieldName";
import FormInput from "../Components/common/FormInput/FormInput";
import SelectOption from "../Components/common/SelectOption/SelectOption";
import TextArea from "../Components/common/TextArea/TextArea";

const DynamicFormhandler: any = (
  data: any,
  register: any,
  errors: any
): any => {
  return data.map((element: IGetContactUsFormInterface, index: number) => {
    <div></div>;
    switch (element.field_name) {
      case EnumFieldName.email:
        return (
          <div className="flex flex-col col-span-2">
            <FormInput
              register={register}
              registerName={element.field_postname}
              type={EnumFieldName.email}
              placeholder={element.field_placeholder}
            >
              {element.field_title}
            </FormInput>
            <p className="text-red">{errors.email?.message}</p>
          </div>
        );

      case EnumFieldName.text:
        return (
          <div className="flex flex-col w-full">
            <FormInput
              register={register}
              registerName={element.field_postname}
              type={EnumFieldName.text}
              placeholder={element.field_placeholder}
            >
              {element.field_title}
            </FormInput>
            <p className="text-red ">
              {index == 0
                ? errors.first_name?.message
                : errors.last_name?.message}
            </p>
          </div>
        );
      case EnumFieldName.text_area:
        return (
          <div className="flex flex-col w-full col-span-2">
            <TextArea
              register={register}
              registerName={element.field_postname}
              label={element.field_title}
              placeholder={element.field_placeholder}
              className="border-b border-[#E5E5E5]"
            />
            <p className="text-red ">{errors.message?.message}</p>
          </div>
        );
      case EnumFieldName.select:
        return (
          <div className="flex flex-col w-full col-span-2">
            <SelectOption
              register={register}
              registerName={element.field_postname}
              label={element.field_title}
              className={"border-b border-[#E5E5E5]"}
              options={element.field_option}
            />
            <p className="text-red">{errors.problemId?.message}</p>
          </div>
        );
      default:
        <div>s</div>;
    }
  });
};

export default DynamicFormhandler;
