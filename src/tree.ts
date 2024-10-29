import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface TreeNode {
  label: string;
  collapsed?: boolean;
  children?: TreeNode[];
}

/**
 * JrTree LitElement
 *
 */
@customElement('jr-tree')
export class JrTree extends LitElement {
  @property({ type: String })
  treeLabel = 'My Tree List';

  static treeData: TreeNode[] = [
    { label: 'Leaf 1' },
    {
      label: 'Leaf 2',
      collapsed: true,
      children: [
        { label: 'Leaf 2, Child 1' },
        { label: 'Leaf 2, Child 2' },
        { label: 'Leaf 2, Child 3' },
      ],
    },
    { label: 'Leaf 3' },
  ];

  static styles = css`
    .jr-tree__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .jr-tree__list__item {
      padding-left: 1em;
    }

    .chevron {
      cursor: pointer;
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      transition: transform 0.3s;
    }

    .chevron.open {
      transform: rotate(90deg);
    }
    
    .leaf-icon {
      margin-right: 0.5em;
      color: gray;
      font-size: 0.8em;
      opacity: 0.6;
    }
  `;

  private toggleCollapse(node: { collapsed?: boolean; children?: Array<any> }) {
    node.collapsed = !node.collapsed;
    this.requestUpdate();
  }

  private renderTree(nodes: TreeNode[]): TemplateResult {
    return html`
      <ul class="jr-tree__list">
        ${nodes.map(node => html`
          <li class="jr-tree__list__item">
            ${node.children ? html`
              <span class="chevron ${node.collapsed ? 'collapsed' : 'open'}" @click="${() => this.toggleCollapse(node)}">
                &#9654;
              </span>
            ` : html`<span class="leaf-icon">•</span>`}
            ${node.label}
            ${node.children && !node.collapsed ? this.renderTree(node.children) : null}
          </li>
        `)}
      </ul>
    `;
  }

  render(): TemplateResult {
    return html`
      <section aria-labelledby="tree-label">
        <h4 id="tree-label" class="jr-tree__label">${this.treeLabel}</h4>
        ${this.renderTree(JrTree.treeData)}
      </section>
    `;
  }
}
