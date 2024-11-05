import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import JrLogger from '../../utils/logger.js';

export interface INavigationDataChildNode {
  icon?: string
  id?: string;
  label?: string;
  link?: string;
  route_view_selector?: string;
  scroll?: boolean;
  url?: string;
}
export interface INavigationDataRootNode {
  header?: string;
  icon?: string;
  items?: INavigationDataChildNode[];
}

export type NavigationDataRootNode = INavigationDataRootNode;
export type NavigationDataChildNode = INavigationDataChildNode;

// CSS
import { linkStyles } from '../styles/link.styles';
import { typographyStyles } from '../styles/typography.styles';

@customElement('jr-navigation')
export class JrNavigation extends LitElement {
  jsonPath: string = '';
  
  @property({type: Array})
  navigationData: NavigationDataRootNode[] = [];

  @property({type: String})
  theme: 'side' | 'top' = 'side';

  styles: any[] = [typographyStyles, linkStyles,
    css``
  ];

  constructor() {
    super();
  }

  firstUpdated() {
    if (window?.app?.router) {
      window.app.router.initialize(this.shadowRoot);
    }
  }
  
  async connectedCallback() {
    super.connectedCallback();
   
    const jsonPath: string = this?.theme === 'side' ? './data/navigation-side.json': `./data/navigation-top.json`;
    const response = await fetch(jsonPath);

    this.navigationData = await response.json();

    await this.requestUpdate(); // Wait for Lit to update the DOM with new data
  }

  render(): TemplateResult {
    return html`
      <nav class="jr-navigation" style="width: 150px; display: block;">
        <jr-navigation-list theme="${this.theme}"
                            .navigationData="${this.navigationData}">
        </jr-navigation-list>
      </nav>
    `;
  }
}