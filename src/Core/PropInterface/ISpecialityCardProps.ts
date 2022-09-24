interface ISpecialityCardProps {
  image: string;
  title: titleDto;
  description: string;
  className: string;
}

interface titleDto {
  bold: string;
  normal: string;
}

export default ISpecialityCardProps;
