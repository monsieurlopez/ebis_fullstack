import icon from '../assets/Icons/link-out.svg';

type LinkCustomButtonProps = {
  width?: number;
  height?: number;
  title?: string;
  url: string;
};

export const LinkButton: React.FC<LinkCustomButtonProps> = ({
  width = 20,
  height = 20,
  title = 'Link a documento de la SEC',
  url = '#',
}) => {
  return (
    <a className="cursor-pointer" href={url} target="_blank">
      <img
        src={icon}
        width={width}
        height={height}
        className="hover:scale-105 transition-all duration-300 ease-in-out"
        title={title}
      />
    </a>
  );
};
