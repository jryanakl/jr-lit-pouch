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
  @property({ type: Boolean }) darkMode = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) rounded = false;
  @property({ type: Boolean }) stretch = false;
  @property({ type: String }) theme: 'sm' | 'default' = 'default'; // New theme property

  static styles = css`
    .jr-button {
      background-color: #1a1a1a;
      border: 1px solid var(--border-color-default);
      cursor: pointer;
      font-family: inherit;
      font-size: 1em;
      font-weight: 500;
      height: 40px;
      padding: 0.6em 1.2em;
      transition: border-color 0.25s;
    }

    /* Style for the small theme */
    .jr-button--sm {
      font-size: 0.775em;
      height: 32px;
      padding: 0.3em 0.9em;
    }

    .jr-button--stretch {
      width: 100%;
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
    
    .jr-button__text {
      white-space: nowrap;
    }
  `;

  private handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    // Emit click event
    this.dispatchEvent(new CustomEvent('jr-button-click', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button
        class="
          jr-button 
          ${this.theme === 'sm' ? 'jr-button--sm' : ''} 
          ${this.darkMode ? 'jr-button--dark' : ''} 
          ${this.disabled ? 'jr-button--disabled' : 'jr-button--hover'}
          ${this.rounded ? 'jr-button--rounded' : ''}
          ${this.stretch ? 'jr-button--stretch' : ''}
        "
        role="${this.buttonRole}"
        type="${this.buttonType}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        <span class="jr-button__text">
          <!-- The <slot /> element serves as a placeholder where you can insert external content into your custom element -->
          <!-- Without slot, you would display only the default buttonText specified in your component, limiting flexibility -->
          <slot class="jr-button__slot">
            ${this.buttonText ? this.buttonText : 'Default'}
          </slot>
        </span>
      </button>
    `;
  }
}
