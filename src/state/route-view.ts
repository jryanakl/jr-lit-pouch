import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { INavigationDataChildNode } from '../ui/navigation/navigation';
import { JrRouteViewService } from './route-view.service.js';

@customElement('jr-route-view')
export class JrRouteViewComponent extends LitElement {
  @property({ type: Object }) navigationNode: INavigationDataChildNode = {};

  static styles = [
    // Your styles here
  ];

  // Called whenever properties change
  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('navigationNode')) {
      this.updateRouteView(this.navigationNode);
    }
  }
  
  private async updateRouteView(navigationNode: INavigationDataChildNode) {
    this.innerHTML = '';
    const routeViewElement: HTMLElement = this.createRouteViewElement(navigationNode);

    if (routeViewElement) {
      this.appendChild(routeViewElement);

      await this.waitForRender();

      let targetChild = this.shadowRoot?.getElementById(`${navigationNode?.route_view_selector}`) as HTMLElement | null;
      
      if (targetChild === null && routeViewElement?.shadowRoot) {
        targetChild = routeViewElement.shadowRoot.querySelector(`#${navigationNode.route_view_selector}`) as HTMLElement;
      } 

      if (targetChild) {
        targetChild.scrollIntoView({ behavior: 'smooth' });
      }
      
      JrRouteViewService.scrollPage(navigationNode, routeViewElement)
    }
  }


  private waitForRender(): Promise<void> {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        setTimeout(resolve, 100);
      });
    });
  }

  private createRouteViewElement(navigationNode: INavigationDataChildNode): HTMLElement {
    let routeViewElement: HTMLElement;

    switch (navigationNode?.url) {
      case "/":
      case "/home":
        routeViewElement = document.createElement("jr-home-page");
        break;
      case "/crazy":
        routeViewElement = document.createElement("jr-crazy-page");
        break;
      case "/components":
        routeViewElement = document.createElement("jr-components-page");
        break;
      case "/data":
        routeViewElement = document.createElement("jr-data-page");
        break;
      case "/tooling":
        routeViewElement = document.createElement("jr-tooling-page");
        break;
      case "/web-apis":
        routeViewElement = document.createElement("jr-web-apis-page");
        break;
      default:
        if (navigationNode?.link && navigationNode.link.startsWith("/jr-")) {
          routeViewElement = document.createElement("section");
          routeViewElement.dataset.productId = navigationNode.link.split("-").pop() || "";
        } else {
          routeViewElement = document.createElement("aside");
        }
        break;
    }

    return routeViewElement;
  }



  render() {
    return html`
      <div class="jr-route-view">
        <!-- Content will be dynamically added here -->
        <slot class="jr-route-view__slot">
        </slot>
      </div>
    `;
  }
}
