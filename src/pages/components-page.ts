import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { gridStyles } from '../ui/grid.styles.js';
import { TreeNode } from '../ui/tree.js';

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

  treeData: TreeNode[] = [
    {
      id: '1',
      label: 'Tree Node 1',
      collapsed: false,
      children: [
        { label: 'Child Node 1.1', id: '1A' },
        { label: 'Child Node 1.2',
          id: '1B',
          collapsed: true,
          children: [
            { id:"1A00", label: 'Grandchild Node 1.2.1' }
          ]
        }
      ]
    },
    {
      id: '1',
      label: 'Tree Node 2',
      collapsed: true
    }
  ];

  static styles = [
    gridStyles,
    css`
      .jr-components-page {
      }

      .no-margin--top {
        margin-top: 0;
      }

      dl {
        font-size: 14px;
        margin: 20px 0;
      }

      dt {
        font-weight: bold;
        margin: 10px 0;
      }

      dd {
        margin: 0 0 20px 0;
      }

      button {
        margin-top: 10px;
      }
    `
  ];

  render() {
    return html`
      <section id="jr-components-page" class="jr-components-page">
        <h2>Components</h2>
        <p>Accessible components</p>
        <div class="jr-grid__block-sm">
          <h3 id="tree-header" class="no-margin--top">Tree</h3>
          <jr-tree .treeData="${this.treeData}"></jr-tree>
        </div>
        <div class="jr-grid__block-sm">
          <h3 id="table-header" class="no-margin--top">Basic Table</h3>
          <jr-table .headers="${this.tableData.headers}" .rows="${this.tableData.rows}"></jr-table>
        </div>
        <div class="jr-grid__block-sm">
          <h3 id="button-header">Button</h3>
          <dl>
            <dt>Default</dt>
            <dd>
              <jr-button aria-label="Default" buttonRole="button" buttonType="button" buttonText="Default Button"></jr-button>
            </dd>
            <dt>Round</dt>
            <dd>
              <jr-button .rounded="${true}" buttonRole="button" aria-label="Round" buttonType="button" buttonText="Round"></jr-button>
            </dd>
            <dt>Disabled</dt>
            <dd>
              <jr-button .disabled="${true}" buttonRole="button" aria-label="Disable the action" buttonType="button" buttonText="Disabled Button"></jr-button>
            </dd>
          </dl>
        </div>
      </section>
      `;
  }
}
