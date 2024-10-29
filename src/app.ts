import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from './grid.styles.js';
//import { router } from './main.js';

@customElement('jr-app')
export class JrApp extends LitElement {
  static styles = [
    gridStyles,
    css``
  ];

  //currentRoute: string = router.currentRoute;

  constructor() {
    console.log(`%cJrApp`, 'font-size: 14px; color: blue;');
    super();
    //this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  async connectedCallback() {
    super.connectedCallback();
    // if (router) {
    //   console.log('router', router);
    // }
    //console.log('router', router);

    //     window.addEventListener('route-changed', this.handleRouteChange);
  }

  //   disconnectedCallback() {
  //     window.removeEventListener('route-changed', this.handleRouteChange);
  //     super.disconnectedCallback();
  //   }

  //   handleRouteChange(event: Event) {
  //     const routeEvent = event as CustomEvent;
  //     this.currentRoute = routeEvent.detail.route;
  //     this.requestUpdate(); // Triggers re-render
  //   }

  render() {
    return html`
      <div class="jr-grid__block-sm">
        <h3>Button</h3>
        <jr-button></jr-button>
      </div>
      <div class="jr-grid__block-sm">
        <h3>Table</h3>
        <jr-table></jr-table>
      </div>
      <div class="jr-grid__block-sm">
        <h3>Tree</h3>
        <jr-tree></jr-tree>
      </div>
    `;
  }
}
