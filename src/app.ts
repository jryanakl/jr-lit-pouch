import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from './grid.styles.js';
//import { router } from './main.js';

@customElement('jr-app')
export class JrApp extends LitElement {
  // Components
  tableData = {
    headers: ['State', 'Electricity', 'Gas'],
    rows: [
      ['Kansas', '9.41', '3.12'],
      ['Iowa', '9.56', '3.68'],
      ['Missouri', '9.10', '3.39']
    ],
  };
  treeData = {
    header: 'Simple Tree',
    data: [
      { label: 'Node 1' },
      {
        label: 'Node 2',
        collapsed: true,
        children: [
          { label: 'Item 1' },
          { label: 'Item 2' },
          { label: 'Item 3' },
        ],
      },
      { label: 'Node 3' },
    ]
  };

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
      <section class="jr-app">
        <div class="jr-grid__block-sm">
          <h3>Button</h3>
          <jr-button buttonText="Click Me!"></jr-button>
        </div>
        <div class="jr-grid__block-sm">
          <h3>Basic Table</h3>
          <jr-table .headers="${this.tableData.headers}" .rows="${this.tableData.rows}"></jr-table>
        </div>
        <div class="jr-grid__block-sm">
          <h3>Tree</h3>
          <jr-tree treeLabel="${this.treeData.header}" .treeData="${this.treeData.data}"></jr-tree>
        </div>
      </section>
    `;
  }
}
