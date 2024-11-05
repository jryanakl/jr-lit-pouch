import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { codeStyles } from '../ui/styles/code.styles.js';
import { gridStyles } from '../ui/styles/grid.styles.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';
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
    codeStyles,
    gridStyles,
    typographyStyles,
    css`
      .no-margin--top {
        margin-top: 0;
      }

      dl {
        font-size: var(--base-font-size);
        margin: 20px 0;
      }

      dt {
        margin: 10px 0;
      }

      dd {
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
        <h2>Components</h2>
        <p>Accessible components</p>
        <article id="jr-components-page__breadcrumb" class="jr-grid__block-sm">
          <h3 id="tree-header" class="no-margin--top">Breadcrumb</h3>
          <jr-breadcrumb></jr-breadcrumb>
        </article>
        <article id="jr-components-page__card" class="jr-grid__block-sm">
          <h3 id="tree-card" class="no-margin--top">Card</h3>
          <ul class="jr-components-page__cards">
            <li>
              <jr-card></jr-card>
              <!-- <code>This is a <p class="jr-code__html__p">Code Test</p></code> -->
            </li>
            <li>
              <jr-card></jr-card>
            </li>
            <li>
              <jr-card></jr-card>
            </li>
          </ul>
        </article>
        <article id="jr-components-page__tree" class="jr-grid__block-sm">
          <h3 id="tree-header" class="no-margin--top">Tree</h3>
          <jr-tree .treeData="${this.treeData}"></jr-tree>
        </article>
        <article id="jr-components-page__table" class="jr-grid__block-sm">
          <h3 id="table-header" class="no-margin--top">Basic Table</h3>
          <jr-table .headers="${this.tableData.headers}" .rows="${this.tableData.rows}"></jr-table>
        </article>
        <article id="jr-components-page__button" class="jr-grid__block-sm">
          <h3 id="button-header">Button</h3>
          <dl class="jr-grid__list">
            <dt>Default</dt>
            <dd>
              <jr-button buttonRole="button" buttonType="button" aria-label="Default"></jr-button>
            </dd>
            <dt>Round</dt>
            <dd>
              <jr-button .rounded="${true}" buttonRole="button" aria-label="Round" buttonType="button" buttonText="Round"></jr-button>
            </dd>
            <dt>Disabled</dt>
            <dd>
              <jr-button .disabled="${true}" buttonRole="button" aria-label="Disable the action" buttonType="button">
                Disabled
              </jr-button>
            </dd>
            <dt>Small</dt>
            <dd>
              <jr-button theme="sm" aria-label="Default" buttonRole="button" buttonType="button">
                Small
              </jr-button>
              <jr-button .rounded="${true}" theme="sm" aria-label="Default" buttonRole="button" buttonType="button">
                Rounded
              </jr-button>
            </dd>
          </dl>
      </article>
      </section>
      `;
  }
}
