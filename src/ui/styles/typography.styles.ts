import { css } from 'lit';

// Sharing gridStyles
export const typographyStyles = css`
  body * {
    font-size: var(--base-font-size);
    line-height: var(--base-line-height);
  }

  dt, dl, ul, li {
    color: var(--text-color);
  }

  h1 {
    color: var(--white-color);
    font-size: 1.45rem;
    font-weight: 700;
    margin: 0 0 12px 0;
  }

  h2 {
    color: var(--dim-white);
    border-bottom-color: var(--border-color-default);
    border-bottom-style: solid;
    border-bottom-width: 0.5px;
    font-size: 1.30rem;
    font-weight: 600;
    padding-bottom: 8px;
    margin: 0;
  }

  h3 {
    color: var(--dim-white);
    font-size: 1.15rem;
    font-weight: 500;
  }

  h4 {
    color: var(--dim-white);
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: var(--text-color);
  }
`;
