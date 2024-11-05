import { css } from 'lit';

// Sharing codeStyles
export const accessibileStyles = css`
  .jr-accessible__link {
    border: 1px solid orange; //@test
    text-decoration: none;
  }

  .jr-accessible__link::after {
    content: ''; /* Ensures the ::after element renders */
    display: block; /* Makes it visible */
    position: absolute; /* Allows control over placement */
    top: 0; /* Adjust these values as needed */
    left: 0;
    width: 100%;
  }

  .jr-accessible__link--focus-within .jr-accessible__link:focus {
    border: 1px solid orange;
    text-decoration: none;
  }
`;
