export interface ISelectOptionProps {
  label: string;
  className?: string;
  options: Array<IOptionDto>;
}

export interface IOptionDto {
  text: string;
  value: number;
}

