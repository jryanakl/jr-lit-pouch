import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * JrButton LitElement
 */
@customElement('jr-button')
export class JrButton extends LitElement {
  @property({ type: String }) buttonText = '';
  @property({ type: String }) buttonRole: 'button' | 'link' = 'button'; // Valid ARIA roles
  @property({ type: String }) buttonType: 'button' | 'submit' | 'reset' | 'menu' = 'button';
  @property({ type: Boolean }) rounded = false;
  @property({ type: Boolean }) darkMode = false;
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    .jr-button {
      background-color: #1a1a1a;
      border: 1px solid var(--default-border-color);
      cursor: pointer;
      font-family: inherit;
      font-size: 1em;
      font-weight: 500;
      height: 40px;
      min-width: 130px;
      padding: 0.6em 1.2em;
      transition: border-color 0.25s;
    }

    .jr-button--hover:hover {
      background-color: var(--box-shadow);
      border-color: var(--blue-color-light);
    }

    .jr-button--focus:focus,
    .jr-button--focus:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    .jr-button--rounded {
      border-radius: 8px;
    }

    .jr-button--dark {
      color: var(--white-color-soft);
      background: var(--bk-color);
    }

    .jr-button--dark:hover {
      background: var(--box-shadow);
      color: var(--white-color);
      transition: all 0.4s ease;
    }

    .jr-button--disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;

  private handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent('jr-button-click', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button
        class="
          jr-button 
          ${this.rounded ? 'jr-button--rounded' : ''} 
          ${this.darkMode ? 'jr-button--dark' : ''} 
          ${this.disabled ? 'jr-button--disabled' : 'jr-button--hover'}
        "
        role="${this.buttonRole}"
        type="${this.buttonType}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        <slot>${this.buttonText}</slot>
      </button>
    `;
  }
}
