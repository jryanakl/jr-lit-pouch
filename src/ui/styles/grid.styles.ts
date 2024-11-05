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

  .jr-grid__block-md {
    border-bottom: 0.5px dashed var(--border-color-default);
    padding: 48px 24px;
  }

  .jr-grid__block-lg {
    border-bottom: 0.5px dashed var(--border-color-default);
    padding: 96px 24px;
  }

  .jr-grid__block--no-pad-btm {
    padding-bottom: 0;
  }

  .jr-grid__block--sm-pad-top {
    padding-top: 24px;
  }

  .jr-grid__list {
    display: column;
    gap: 0.123rem;
  }
`;