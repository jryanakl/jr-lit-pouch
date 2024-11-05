import { css } from 'lit';

// Sharing codeStyles
export const codeStyles = css`
  code {
    font-size: var(--sm-font-size);
    display: flex;
    margin: 1rem;
    background-color: var(--primary-black);
    border: 1px solid var(--border-color-default);
    border-radius: 0.5rem;
    padding: 1rem;
  }

  // @todo
  code .jr-code__html__p {
    color: var(--lighter-blue);
  }
`;
