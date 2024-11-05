import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface TreeNode {
  label: string;
  id: string;
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
  treeLabel = '';

  @property({ type: Array })
  treeData: TreeNode[] = [];

  static styles = css`
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 1rem; /* Adjust size as needed */
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }
  
    .chevron {
      border: 1px solid var(--border-color);
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.3s;
      vertical-align: middle;
    }

    .chevron.collapsed {
      transform: rotate(0deg);  /* Right-pointing */
    }
    
    .chevron.open {
      transform: rotate(0deg); /* Downward-pointing */
    }
    
    .leaf-icon {
      border: 1px solid var(--bk-color);
      color: gray;
      opacity: 0.6;
      vertical-align: middle;
    }
    
    .jr-tree {
      font-size: var(--base-font-size);
    }

    .jr-tree__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .jr-tree__list__item {
      padding-left: 1em;
    }

    .jr-tree__node-label {
      font-size: 0.9rem;
    }

    .jr-tree__list__item:hover {
      background-color: var(--box-shadow);
    }
  `;

  private toggleCollapse(node: TreeNode) {
    node.collapsed = !node.collapsed;
    this.requestUpdate();
  }

  private handleKeydown(event: KeyboardEvent, node: TreeNode) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleCollapse(node);
    }
  }

  private renderTree(nodes: TreeNode[]): TemplateResult {
    return html`
      <ul class="jr-tree__list" role="tree">
        ${nodes.map(node => html`
          <li class="jr-tree__list__item" role="treeitem" aria-expanded="${!node.collapsed}">
            ${node.children ? html`
              <span
                class="material-icons chevron ${node.collapsed ? 'collapsed' : 'open'}"
                @click="${() => this.toggleCollapse(node)}"
                @keydown="${(event: KeyboardEvent) => this.handleKeydown(event, node)}"
                aria-hidden="true"
                role="button"
                tabindex="0"
                aria-controls="${node.id}"
              >
                ${node.collapsed ? 'chevron_right' : 'expand_more'}
              </span>
            ` : html`
              <span class="material-icons leaf-icon" aria-hidden="true">fiber_smart_record</span>
            `}
            <span class="jr-tree__node-label">${node.label}</span>
            ${node.children && !node.collapsed ? this.renderTree(node.children) : null}
          </li>
        `)}
      </ul>
    `;
  }

  render(): TemplateResult {
    if (this.treeData.length === 0) {
      return html`<p>No items available in the tree.</p>`;
    }

    return html`
      <section aria-labelledby="tree-label">
        <h4 id="tree-label" class="jr-tree__label">${this.treeLabel}</h4>
        ${this.renderTree(this.treeData)}
      </section>
    `;
  }
}
