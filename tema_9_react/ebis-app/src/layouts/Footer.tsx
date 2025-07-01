import { LinkedinSocial } from '../components/LinkedinSocial.tsx';
import { GithubSocial } from '../components/GithubSocial.tsx';

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="w-full absolute bottom-0 left-0 z-50 bg-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-column">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{' '}
          <a href="https://fr.react.dev/" className="hover:underline">
            React™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-3">
          <li>
            <LinkedinSocial />
          </li>
          <li>
            <GithubSocial />
          </li>
        </ul>
      </div>
    </footer>
  );
};
