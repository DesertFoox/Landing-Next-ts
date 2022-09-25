export interface ISelectOptionProps {
  label: string;
  className?: string;
  options: Array<IOptionDto>;
  register: string;
  registerName: string;
}

export interface IOptionDto {
  text: string;
  value: number;
}
