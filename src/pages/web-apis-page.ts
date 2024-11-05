import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';

/**
 * JrWebApisPage LitElement
 *
 */
@customElement('jr-web-apis-page')
export class JrWebApisPage extends LitElement {
  audioElement?: HTMLMediaElement;

  async connectedCallback() {
    super.connectedCallback();
  }

  static styles = typographyStyles;

  render() {
    return html`
      <section id="jr-web-apis-page" class="jr-web-apis-page">
        <h2>Web APIs</h2>
        <dl id="jr-web-apis-page__audio" class="jr-grid__list">
          <dt>
            <p>Audio Output Devices API</p>
            <small>This API allows web applications to prompt users about what output device should be used for audio playback.</small>
          </dt>
          <dd>
            <div style="display: flex; padding-top: 10px; width: 100%; justify-content: start;">
              <jr-audio></jr-audio>
            </div>
          </dd>
        </dl>
      </section>
      `;
  }
}
