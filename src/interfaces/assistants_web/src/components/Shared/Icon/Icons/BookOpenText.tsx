import * as React from 'react';
import { SVGProps } from 'react';

import { IconKind } from '@/components/Shared/Icon/Icon';
import { cn } from '@/utils';

type Props = {
  kind?: IconKind;
} & SVGProps<SVGSVGElement>;

export const BookOpenText: React.FC<Props> = ({ className, kind, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    {kind === 'default' ? (
      <path
        d="M28 6H21C19.9391 6 18.9217 6.42143 18.1716 7.17157C17.4214 7.92172 17 8.93913 17 10V21C17 21.2652 16.8946 21.5196 16.7071 21.7071C16.5196 21.8946 16.2652 22 16 22C15.7348 22 15.4804 21.8946 15.2929 21.7071C15.1054 21.5196 15 21.2652 15 21V10C15 8.93913 14.5786 7.92172 13.8284 7.17157C13.0783 6.42143 12.0609 6 11 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H12C12.7956 26 13.5587 26.3161 14.1213 26.8787C14.6839 27.4413 15 28.2044 15 29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29C17 28.2044 17.3161 27.4413 17.8787 26.8787C18.4413 26.3161 19.2044 26 20 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6ZM26 21H21C20.7348 21 20.4804 20.8946 20.2929 20.7071C20.1054 20.5196 20 20.2652 20 20C20 19.7348 20.1054 19.4804 20.2929 19.2929C20.4804 19.1054 20.7348 19 21 19H26C26.2652 19 26.5196 19.1054 26.7071 19.2929C26.8946 19.4804 27 19.7348 27 20C27 20.2652 26.8946 20.5196 26.7071 20.7071C26.5196 20.8946 26.2652 21 26 21ZM26 17H21C20.7348 17 20.4804 16.8946 20.2929 16.7071C20.1054 16.5196 20 16.2652 20 16C20 15.7348 20.1054 15.4804 20.2929 15.2929C20.4804 15.1054 20.7348 15 21 15H26C26.2652 15 26.5196 15.1054 26.7071 15.2929C26.8946 15.4804 27 15.7348 27 16C27 16.2652 26.8946 16.5196 26.7071 16.7071C26.5196 16.8946 26.2652 17 26 17ZM26 13H21C20.7348 13 20.4804 12.8946 20.2929 12.7071C20.1054 12.5196 20 12.2652 20 12C20 11.7348 20.1054 11.4804 20.2929 11.2929C20.4804 11.1054 20.7348 11 21 11H26C26.2652 11 26.5196 11.1054 26.7071 11.2929C26.8946 11.4804 27 11.7348 27 12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13Z"
        fill="inherit"
      />
    ) : (
      <path
        d="M28 6H20C19.2238 6 18.4582 6.18073 17.7639 6.52786C17.0697 6.875 16.4657 7.37902 16 8C15.5343 7.37902 14.9303 6.875 14.2361 6.52786C13.5418 6.18073 12.7762 6 12 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H12C12.7956 26 13.5587 26.3161 14.1213 26.8787C14.6839 27.4413 15 28.2044 15 29C15 29.2652 15.1054 29.5196 15.2929 29.7071C15.4804 29.8946 15.7348 30 16 30C16.2652 30 16.5196 29.8946 16.7071 29.7071C16.8946 29.5196 17 29.2652 17 29C17 28.2044 17.3161 27.4413 17.8787 26.8787C18.4413 26.3161 19.2044 26 20 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6ZM12 24H4V8H12C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11V25C14.1353 24.3493 13.0821 23.9983 12 24ZM28 24H20C18.9179 23.9983 17.8647 24.3493 17 25V11C17 10.2044 17.3161 9.44129 17.8787 8.87868C18.4413 8.31607 19.2044 8 20 8H28V24ZM20 11H25C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13H20C19.7348 13 19.4804 12.8946 19.2929 12.7071C19.1054 12.5196 19 12.2652 19 12C19 11.7348 19.1054 11.4804 19.2929 11.2929C19.4804 11.1054 19.7348 11 20 11ZM26 16C26 16.2652 25.8946 16.5196 25.7071 16.7071C25.5196 16.8946 25.2652 17 25 17H20C19.7348 17 19.4804 16.8946 19.2929 16.7071C19.1054 16.5196 19 16.2652 19 16C19 15.7348 19.1054 15.4804 19.2929 15.2929C19.4804 15.1054 19.7348 15 20 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16ZM26 20C26 20.2652 25.8946 20.5196 25.7071 20.7071C25.5196 20.8946 25.2652 21 25 21H20C19.7348 21 19.4804 20.8946 19.2929 20.7071C19.1054 20.5196 19 20.2652 19 20C19 19.7348 19.1054 19.4804 19.2929 19.2929C19.4804 19.1054 19.7348 19 20 19H25C25.2652 19 25.5196 19.1054 25.7071 19.2929C25.8946 19.4804 26 19.7348 26 20Z"
        fill="inherit"
      />
    )}
  </svg>
);