var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JrTree_1;
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * JrTree LitElement
 *
 */
let JrTree = JrTree_1 = class JrTree extends LitElement {
    constructor() {
        super(...arguments);
        this.treeLabel = 'My Tree List';
    }
    toggleCollapse(node) {
        node.collapsed = !node.collapsed;
        this.requestUpdate();
    }
    renderTree(nodes) {
        return html `
      <ul class="jr-tree__list">
        ${nodes.map(node => html `
          <li class="jr-tree__list__item">
            ${node.children ? html `
              <span class="chevron ${node.collapsed ? 'collapsed' : 'open'}" @click="${() => this.toggleCollapse(node)}">
                &#9654;
              </span>
            ` : html `<span class="leaf-icon">•</span>`}
            ${node.label}
            ${node.children && !node.collapsed ? this.renderTree(node.children) : null}
          </li>
        `)}
      </ul>
    `;
    }
    render() {
        return html `
      <section aria-labelledby="tree-label">
        <h4 id="tree-label" class="jr-tree__label">${this.treeLabel}</h4>
        ${this.renderTree(JrTree_1.treeData)}
      </section>
    `;
    }
};
JrTree.treeData = [
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
JrTree.styles = css `
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
__decorate([
    property({ type: String })
], JrTree.prototype, "treeLabel", void 0);
JrTree = JrTree_1 = __decorate([
    customElement('jr-tree')
], JrTree);
export { JrTree };
