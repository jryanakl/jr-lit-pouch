var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from './grid.styles.js';
//import { router } from './main.js';
let JrApp = class JrApp extends LitElement {
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
        return html `
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
};
JrApp.styles = [
    gridStyles,
    css ``
];
JrApp = __decorate([
    customElement('jr-app')
], JrApp);
export { JrApp };
