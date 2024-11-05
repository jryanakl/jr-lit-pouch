import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { iconStyles } from '../styles/icon.styles.js';
import { linkStyles } from '../styles/link.styles.js';
import { typographyStyles } from '../styles/typography.styles.js';

import {
  INavigationDataRootNode, 
  NavigationDataRootNode, 
  INavigationDataChildNode
} from "./navigation.js";

@customElement('jr-navigation-list')
export class JrNavigationList extends LitElement {
  @property({type: String})
  theme: 'side' | 'top' = 'side';
  
  @property({type: Array})
  navigationData: NavigationDataRootNode[] = [];
  
  static styles = [
    iconStyles,
    linkStyles,
    typographyStyles,
    css`
     .jr-navigation-list {
        gap: 1rem;
        font-size: 0.9rem;
        font-weight: 400;
        list-style: none;
        margin: 0px 0px 0px 1px;
        padding: 1rem;
      }

      .jr-navigation--theme-top {
        display: flex;
        flex-flow: row;
      }

      .jr-navigation--theme-side {
        display: flex;
        flex-flow: column;
      }

      .jr-navigation--theme-side .jr-navigation-list__li {
        display: flex;
        flex-flow: column;
        gap: 0.75rem;
      }

      .jr-navigation-list__header {
        font-size: var(--base-font-size);
      }
    `
  ];

  public handleChildNodeClick(event: Event) {
    event.preventDefault(); // Prevent the default anchor link behavior

    window.app.router.handleLinkClick(event);
  }
  

  renderLink(childNode: INavigationDataChildNode ) {
    return html`
      <a class="jr-navigation-list__link"
         id="${ifDefined(childNode?.id)}"
         data-route-view-selector="${ifDefined(childNode?.route_view_selector)}"
         data-scroll="${ifDefined(childNode?.scroll)}"
         data-url="${ifDefined(childNode?.url)}"
         href="${ifDefined(childNode?.route_view_selector)}"
         @click="${this.handleChildNodeClick}">
        ${childNode?.label}
      </a>
    `
  }
  
  renderListItem(node: INavigationDataRootNode) {
    return html`
    <li class="jr-navigation-list__li">
      <h4 class="jr-navigation-list__header">
        ${
          ifDefined(node?.header) ? html`${node?.header}` : ''
        }
      </h4>
      ${
        node?.items?.map((childNode: INavigationDataChildNode) =>
          this.renderLink(childNode)
        )
      }
    </li>
  `
  }
  
  render() {
    if (this.navigationData?.length === 0) {
      return html`
        <ul class="jr-navigation-list jr-navigation--theme-${this.theme}">
          <li class="jr-navigation-list__li">
            No items available in the navigation
          </li>
        </ul>
      `;
    }

    return html`
      <ul class="jr-navigation-list jr-navigation--theme-${this.theme}">
        ${
          this.navigationData.map((node) =>
            this.renderListItem(node)
          )
        }
      </ul>
    `;
  }
}