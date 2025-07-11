import { IconGithub } from '../assets/Icons/Github.tsx';

export const GithubSocial: React.FC = () => {
  return (
    <a
      href="https://github.com/monsieurlopez"
      className="hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGithub />
    </a>
  );
};
