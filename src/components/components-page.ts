import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from '../grid.styles.js';

/**
 * JrComponentsPage LitElement
 *
 */
@customElement('jr-components-page')
export class JrComponentsPage extends LitElement {
  tableData = {
    headers: ['State', 'Electricity', 'Gas'],
    rows: [
      ['Kansas', '9.41', '3.12'],
      ['Iowa', '9.56', '3.68'],
      ['Missouri', '9.10', '3.39']
    ],
  };

  treeData = {
    header: '',
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
    css`
      .jr-components-page {
        min-width: 100%;

      }
      .no-margin--top {
        margin-top: 0;
      }
    `
  ];

  render() {
    return html`
      <section id="jr-components-page" class="jr-components-page">
        <h2>Components</h2>
        <p>Accessible components</p>
        <div class="jr-grid__block-sm">
          <h3 class="no-margin--top">Tree</h3>
          <jr-tree treeLabel="${this.treeData.header}" .treeData="${this.treeData.data}"></jr-tree>
        </div>
        <div class="jr-grid__block-sm">
          <h3 class="no-margin--top">Basic Table</h3>
          <jr-table .headers="${this.tableData.headers}" .rows="${this.tableData.rows}"></jr-table>
        </div>
        <div class="jr-grid__block-sm">
          <h3 class="no-margin--top">Button</h3>
          <jr-button buttonText="Click Me!"></jr-button>
        </div>
      </section>
      `;
  }
}
