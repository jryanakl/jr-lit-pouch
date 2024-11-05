import { css } from 'lit';

// Sharing gridStyles
export const gridStyles = css`
  .jr-grid__block {
    padding: 48px;
  }

  .jr-grid__block-sm {
    border-bottom: 0.5px dashed var(--border-color-default);
    padding: 24px;
  }

  .jr-grid__block--no-pad-btm {
    padding-bottom: 0;
  }

  .jr-grid__list {
    display: column;
    gap: 0.123rem;
  }
`;