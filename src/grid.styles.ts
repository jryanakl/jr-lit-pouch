import { css } from 'lit';

// Sharing gridStyles
export const gridStyles = css`
  .jr-grid__block {
    padding: 48px;
  }

  .jr-grid__block-sm {
    border-bottom: 1px dashed gray;
    padding: 24px;
  }

  .jr-grid__block--no-pad-btm {
    padding-bottom: 0;
  }
`;