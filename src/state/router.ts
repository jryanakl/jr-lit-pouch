import { NavigationDataRootNode } from '../ui/navigation/navigation.js';
import JrLogger from '../utils/logger.js';

export default class Router {
  private url = window.location.pathname;

  constructor() {
    window.addEventListener("popstate", (event) => {
      this.navigate(event.state?.route || "/", false);
    });
  }

  public handleLinkClick(event: Event | PointerEvent) {
    event.preventDefault();

    const anchorElement: HTMLAnchorElement = (event?.currentTarget as HTMLAnchorElement);
    const url = anchorElement.getAttribute('data-url');
    const route_view_selector = anchorElement.getAttribute('data-route-view-selector');
    const scroll: boolean = anchorElement.getAttribute('data-scroll') === "true" ? true : false;

    if (route_view_selector) {
      this.switchRoute(url, route_view_selector, scroll);
    }
  }
  
  initialize(shadowRoot: ShadowRoot | null) {
    if (!shadowRoot) {
      return;
    }

    if (window?.app?.router) {
      this.navigate(this.url, false);
    } else {
      console.error("Router instance does not exist on window.app");
    }
  }

  navigate(url: string, addToHistory = true) {
    JrLogger.logMethod('navigate()', url);
    
    if (addToHistory) {
      history.pushState({ route: url }, "", url);
    }

    this.switchRoute(url);
    this.url = url;
  }

  private createRouteViewElement(url: string): HTMLElement {
    let routeViewElement: HTMLElement;
  
    switch (url) {
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
        if (url.startsWith("/jr-")) {
          routeViewElement = document.createElement("section");
          routeViewElement.dataset.productId = url.split("-").pop() || "";
        } else {
          routeViewElement = document.createElement("aside");
        }
        break;
    }
  
    return routeViewElement;
  }
  
  private switchRoute(url: any, route_view_selector: string = '/', scroll: boolean = false) {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.innerHTML = "";
      const routeViewElement: HTMLElement = this.createRouteViewElement(url);
      
      if (routeViewElement) {
        mainElement.appendChild(routeViewElement);
      }

      if (scroll) {
        this.scrollToRouteView(route_view_selector, scroll);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  private scrollToRouteView(route_view_selector: string, scroll?: boolean) {
    if (scroll && route_view_selector) {
      const routeViewElement = document.getElementById(route_view_selector);

      if (routeViewElement) {
        const yOffset = -80; // Adjust for any fixed headers, if necessary
        const y = routeViewElement.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }
  }
}
