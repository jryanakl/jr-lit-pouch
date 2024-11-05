import { css } from 'lit';

// Sharing gridStyles
export const gradientStyles = css`
  .jr-gradient--linear {
    background: rgb(2,0,36);
    background: linear-gradient(180deg, var(--background-color) 0%, rgba(19,19,19,1) 35%, var(--background-color) 100%);
  }

  .jr-gradient--radial {
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(19,19,19,1) 35%, rgba(135,135,135,1) 100%);
  }
`;