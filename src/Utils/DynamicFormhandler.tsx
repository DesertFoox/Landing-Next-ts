import React from "react";

import IGetContactUsFormInterface from "../Core/Interface/IGetContactUsFormInterface";
import EnumFieldName from "../Core/Enum/EnumFieldName";
import FormInput from "../Components/common/FormInput/FormInput";
import SelectOption from "../Components/common/SelectOption/SelectOption";
import TextArea from "../Components/common/TextArea/TextArea";

const DynamicFormhandler: React.FC<any> = (data): JSX.Element => {
  return data.map((element: IGetContactUsFormInterface) => {
    <div></div>
    switch (element.field_name) {
      case EnumFieldName.email:
        return (
          <div className="flex flex-col col-span-2">
            
            <FormInput
              type={EnumFieldName.email}
              placeholder={element.field_placeholder}
            >
              {element.field_title}
            </FormInput>
          </div>
        );

      case EnumFieldName.text:
        return (
          <div className="flex flex-col w-full">
            <FormInput
              type={EnumFieldName.text}
              placeholder={element.field_placeholder}
            >
              {element.field_title}
            </FormInput>
          </div>
        );
      case EnumFieldName.text_area:
        return (
          <div className="flex flex-col w-full col-span-2">
            <TextArea
              label={element.field_title}
              placeholder={element.field_placeholder}
              className="border-b border-[#E5E5E5]"
            />
          </div>
        );
      case EnumFieldName.select:
        return (
          <div className="flex flex-col w-full col-span-2">
            <SelectOption
              label={element.field_title}
              className={"border-b border-[#E5E5E5]"}
              options={element.field_option}
            />
          </div>
        );
      default:
        <div>s</div>;
    }
  });
};

export default DynamicFormhandler;
