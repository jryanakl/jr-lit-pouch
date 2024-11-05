import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { codeStyles } from '../ui/styles/code.styles.js';
import { gridStyles } from '../ui/styles/grid.styles.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';
import { TreeNode } from '../ui/tree.js';
import { JrTableData } from '../ui/table/model/table.types.js';

/**
 * JrComponentsPage LitElement
 *
 */
@customElement('jr-components-page')
export class JrComponentsPage extends LitElement {
  jrTableData: JrTableData = {
    columns: [
      { index: 0, key: 'name', title: 'Name', isSortable: true },
      { index: 1, key: 'value', title: 'Value', isSortable: true },
      { index: 2, key: 'date', title: 'Date', isSortable: true },
    ],
    rows: [
      { name: "Item A", value: 10, date: new Date('2024-01-01') },
      { name: "Item B", value: 5, date: new Date('2024-02-01') },
      { name: "Item C", value: 15, date: new Date('2024-03-01') },
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
    codeStyles,
    gridStyles,
    typographyStyles,
    css`
      .no-margin--top {
        margin-top: 0;
      }

      ul.jr-grid__list {
        display: flex;
        justify-content: space-between;
        list-style: none;
        font-size: var(--base-font-size);
        margin: 20px 0;
      }

      .jr-grid__lis p {
        margin: 10px 0;
      }

      .jr-grid__lis li {
        margin: 0 0 20px 0;
      }

      button {
        margin-top: 10px;
      }

      .jr-components-page__cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        list-style: none;
      }
    `
  ];

  render() {
    return html`
      <section id="jr-components-page" class="jr-components-page">
        <h2>Basic Components</h2>
        <p>These are basic component examples</p>
        <article id="jr-components-page__table" class="jr-grid__block-lg jr-grid__block--sm-pad-top">
          <h3 id="table-header" class="no-margin--top">
            Table
          </h3>
          <jr-table .columns=${this.jrTableData.columns}
                    .rows=${this.jrTableData.rows}
                    footerContent="JR Designs">
          </jr-table>
        </article>
        <article id="jr-components-page__card" class="jr-grid__block-lg">
          <h3 id="tree-card" class="no-margin--top">
            Card
          </h3>
          <ul class="jr-components-page__cards">
            <li><jr-card></jr-card></li>
            <li><jr-card></jr-card></li>
            <li><jr-card></jr-card></li>
          </ul>
        </article>
        <article id="jr-components-page__tree" class="jr-grid__block-md">
          <h3 id="tree-header">Tree</h3>
          <jr-tree .treeData="${this.treeData}"></jr-tree>
        </article>
        <article id="jr-components-page__button" class="jr-grid__block-md">
          <h3 id="button-header">Button</h3>
          <ul class="jr-grid__list">
            <li>
              <p>Default</p>
              <jr-button buttonRole="button" buttonType="button" aria-label="Default"></jr-button>
            </li>
            <li>
              <p>Round</p>
              <jr-button .rounded="${true}" buttonRole="button" aria-label="Round" buttonType="button" buttonText="Round"></jr-button>
            </li>
            <li>
              <p>Disabled</p>
              <jr-button .disabled="${true}" buttonRole="button" aria-label="Disable the action" buttonType="button">
                Disabled
              </jr-button>
            </li>
            <li>
              <p>Small</p>
              <jr-button theme="sm" aria-label="Default" buttonRole="button" buttonType="button">
                Small
              </jr-button>
              <jr-button .rounded="${true}" theme="sm" aria-label="Default" buttonRole="button" buttonType="button">
                Rounded
              </jr-button>
            </li>
          </ul>
        </article>
      </section>
      `;
  }
}
