import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';


const JrAudioDefaults = {
  audioSources: {
    The_Neverwritten_Role_Playing_Game: `http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3`
  },
};

/**
 * JrAudio LitElement
 *
 */
@customElement('jr-audio')
export class JrAudio extends LitElement {
  audioDevice: MediaDeviceInfo | null = null;

  @property({ type: String }) audioSource: string = JrAudioDefaults.audioSources.The_Neverwritten_Role_Playing_Game;
  
  // Initialize elements as possibly undefined to prevent ts error
  private audioElement?: HTMLAudioElement;
  
  constructor() {
    super();

    // Initialize the audio element in the constructor
    this.audioElement = new Audio(); // Create a new HTMLAudioElement instance
    this.audioElement.src = this.audioSource; // Set the source
  }

  public onPlayAudio() {
    if (!this.audioElement) {
      this.audioElement = new Audio(this.audioSource);
    }
  
    this.audioElement.play().catch(error => {
      console.error(`Error: trying audioElement.play():`, error);
    });
  }

  public onStopAudio() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0; // Reset to start
    }
  }

  static styles = css`
    .jr-audio {
      min-width: 200px;
      max-width: 500px;
    }

    .jr-audio__top {
      background-color: var(--shadow-color);
      border: 1px solid var(--border-color-default);
      border-bottom: 0;
      display: flex;
      justify-content: center;
      padding: 1rem;
    }

    .jr-audio__bottom {
      background-color: var(--background-color);
      border: 1px solid var(--border-color-default);
      display: flex;
      justify-content: center;
      padding: 0.5rem;
    }
    
    .jr-audio__audio-element {
      border: 1px solid var(--border-color-default);
      border-radius: 2rem;
    }

    .jr-audio__spacer {
      border-left: 1px solid var(--border-color-default);
      justify-content: center;
    }
  `;

  renderButtonElements(): TemplateResult {
    return html`
      <div class="jr-audio__button-elements">
        <jr-button @click="${this.onPlayAudio}"
                   .rounded="${true}"
                   aria-label="Play"
                   buttonRole="button"
                   buttonType="button"
                   id="jr-audio__play-button"
                   theme="sm">
          Play
        </jr-button>
        <span class="jr-audio__spacer"></span>
        <jr-button @click="${this.onStopAudio}"
                   .rounded="${true}"
                   aria-label="Stop"
                   buttonRole="button"
                   buttonType="button"
                   id="jr-audio__stop-button"
                   theme="sm">
          Stop
        </jr-button>
      </div>
    `;
  }

  renderAudioElement(): TemplateResult {
    return html`
      <audio
        id="jr-audio__audio-element"
        class="jr-audio__audio-element"
        src="${this.audioSource}"
        controls
      ></audio>
    `;
  }
  
  render() {
    return html`
      <div class="jr-audio" aria-label="Audio">
        <div class="jr-audio__top">
          ${this.renderAudioElement()}
        </div>
        <div class="jr-audio__bottom">
          ${this.renderButtonElements()}
        </div>
      </div>
      `;
  }
}
