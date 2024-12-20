import { Buffer } from 'buffer';
import process from 'process';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { gridStyles } from './ui/styles/grid.styles.js';
import Router from  './state/router.js';

// Pages
import { JrRouteViewComponent } from  './state/route-view.js'
import { JrHomePage } from './pages/home-page.js';
import { JrCrazyPage } from './pages/crazy-page.js';
import { JrComponentsPage } from './pages/components-page.js';
import { JrDataPage } from './pages/data-page.js';
import { JrWebApisPage } from './pages/web-apis-page.js';
import { JrToolingPage } from './pages/tooling-page.js';

import { NavigationDataChildNode } from './ui/navigation/navigation.js';

window.Buffer = Buffer;
window.process = process;
window.app = {}
window.app.router = new Router();

/**
 * JrMain LitElement
 *
 * @csspart button - The button
 */
@customElement('jr-main')
export class JrMain extends LitElement {
  @property()
  toolsSubHeader = 'Click on the Vite and Lit logos to learn more';

  private navigationNode: NavigationDataChildNode = {
    id: "jr-navigation__home",
    route_view_selector: "jr-home-page__overview",
    url: "/home"
  };

  static styles = [
    gridStyles,
    css``
  ];

  render() {
    return html`
      <div>
        <jr-route-view .navigationNode="${this.navigationNode}"></jr-route-view>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jr-main': JrMain,
    'jr-home-page': JrHomePage,
    'jr-crazy-page': JrCrazyPage,
    'jr-components-page': JrComponentsPage,
    'jr-data-page': JrDataPage,
    'jr-web-apis-page': JrWebApisPage,
    'jr-tooling-page': JrToolingPage,
    'jr-route-view': JrRouteViewComponent,
  }
}
