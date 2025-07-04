import icon from '../assets/Icons/info-alt.svg';

type InfoIconProps = {
  width?: number;
  height?: number;
  description: string;
};

export const InfoIcon: React.FC<InfoIconProps> = ({
  width = 20,
  height = 20,
  description,
}) => {
  return (
    <img
      src={icon}
      width={width}
      height={height}
      className="cursor-pointer"
      title={description}
    />
  );
};
