import { BasicButton } from '@/components/Shared';
import { cn } from '@/utils';

type ButtonProps = {
  onClick: () => void;
  className?: string;
};

const githubLogo = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58011 0 0 3.67017 0 8.20125C0 11.8261 2.29343 14.8972 5.47084 15.9846C5.86863 16.0602 6.01596 15.8084 6.01596 15.5869C6.01596 15.3906 6.01105 14.877 6.00614 14.1923C3.78146 14.6857 3.31001 13.0948 3.31001 13.0948C2.94659 12.1483 2.42112 11.8966 2.42112 11.8966C1.69429 11.3881 2.47514 11.3982 2.47514 11.3982C3.27563 11.4586 3.70288 12.244 3.70288 12.244C4.41498 13.4976 5.57397 13.1351 6.03069 12.9236C6.10436 12.395 6.31062 12.0325 6.53653 11.8261C4.75875 11.6197 2.89257 10.9149 2.89257 7.77332C2.89257 6.87717 3.20196 6.14716 3.71762 5.57323C3.63413 5.36681 3.35912 4.53108 3.79619 3.40334C3.79619 3.40334 4.469 3.18182 5.99632 4.24411C6.63474 4.06287 7.31737 3.97224 8 3.96721C8.67772 3.96721 9.36525 4.06287 10.0037 4.24411C11.531 3.18182 12.2038 3.40334 12.2038 3.40334C12.6409 4.53108 12.3659 5.36681 12.2824 5.57323C12.7931 6.14716 13.1025 6.87717 13.1025 7.77332C13.1025 10.9249 11.2314 11.6147 9.44874 11.8211C9.73358 12.0728 9.99386 12.5763 9.99386 13.3415C9.99386 14.439 9.98404 15.3201 9.98404 15.5919C9.98404 15.8135 10.1265 16.0652 10.5341 15.9846C13.7115 14.8972 16 11.8261 16 8.20628C16 3.67017 12.4199 0 8 0Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Button used for GitHub sign up and login.
 * Note: one-off styling is included to match the Google SSO button since we are limited in how we can style it.
 */
export const GithubSSOButton: React.FC<ButtonProps> = ({ className, onClick }) => {
  return (
    <BasicButton
      startIcon={githubLogo}
      onClick={onClick}
      label="Continue with Github"
      size="sm"
      kind="secondary"
      className={cn(
        // align with the max-width of the Google SSO button, which is 400px
        'h-10 !max-w-[400px] !rounded border-[#dadce0] bg-[#ffffff]',
        className
      )}
    />
  );
};

export default GithubSSOButton;