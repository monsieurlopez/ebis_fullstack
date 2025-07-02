import { IconLinkedin } from '../assets/Icons/Linkedin';

export const LinkedinSocial: React.FC = () => {
  return (
    <a
      href="https://www.linkedin.com/in/lopez-ruiz-sergio/"
      className="hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedin />
    </a>
  );
};
