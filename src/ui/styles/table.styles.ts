import { css } from 'lit';

export const tableStyles = css`
  .jr-table--container {
    display: block;
    border: 4px solid var(--primary-black);
    border-radius: 4px;
    width: 100%;
    overflow-x: auto;
  }

  .jr-table {
    border-collapse: collapse;
    border: 1px solid var(--border-color-default);
    font-size: var(--base-font-size);
    table-layout: auto;
    width: 100%;
  }

  // thead
  .jr-table-head {
     /* background-color: rgba(255, 255, 255, 0.025); */
  }

  .jr-table-head-cell {
    font-weight: bold;
    color: var(--text-color-lightest);
    padding: 0.5rem;
    text-align: left;
  }

  .jr-table-head-row {
    border-bottom: 1px solid var(--border-color-default);
  }

  .jr-table-head-cell__link {
    font-size: 1.33rem;
  }

  a.jr-table-head-cell__link:hover {
    text-decoration: none; 
  }
  
  // tbody
  .jr-table-body {
    /* background-color: rgba(255, 255, 255, 0.025); */
  }

  .jr-table-body-row {
    border-bottom: 1px solid var(--stage-background-color);
    background-color: rgba(255, 255, 255, 0.025); /* Replace with your color and 0.5 for 50% transparency */
    padding: var(--cell-padding-default);
  }

  .jr-table-body-cell {
    font-weight: normal;
    color: var(--text-color-lighter);
    text-align: left;
    padding: 0.5rem;
  }
  
  // tfooter
  .jr-table-footer {
    padding: 0.5rem;
  }

  .jr-table-footer__tr {
    border-top: 1px solid var(--border-color-default);
  }

  .jr-table-footer__td {
    padding: 0.5rem;
  }

  .jr-table-footer-content {
    color: var(--text-color);
  }

  .jr-table-head-cell__container {
    display: flex;
    justify-content: space-between;
  }
`;
