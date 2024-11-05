import { css } from 'lit';

// Sharing gridStyles
export const linkStyles = css`
  a {
    color: var(--primary-blue);
    text-decoration: inherit;
  }

  a:hover {
    color: var(--light-blue);
    cursor: pointer;
    text-decoration: underline;
  }

  a:visted {
    color: var(--dark-blue);
    text-decoration: underline;
  }
`;