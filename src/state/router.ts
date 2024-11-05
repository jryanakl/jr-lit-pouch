import { INavigationDataChildNode } from '../ui/navigation/navigation.js';
import JrLogger from '../utils/logger.js';
import { JrRouteViewComponent } from './route-view.js';

export default class Router {
  private navigationNode: INavigationDataChildNode = {};

  constructor() {
    JrLogger.logClass('Router');
    JrLogger.logMethod('constructor', {$ctrl: this, window: window});

    window.addEventListener("popstate", (event) => {
      this.navigate(this.navigationNode, event, true);
      // this.navigate(event.state?.route || "/", false);
    });
  }

  public handleLinkClick(event: Event | PointerEvent) {
    event.preventDefault();

    const anchorElement: HTMLAnchorElement = (event?.currentTarget as HTMLAnchorElement);
    const dataset = anchorElement.dataset;
    const navigationNode: INavigationDataChildNode = {
      id: anchorElement?.id,
      label: dataset?.label,
      link: dataset?.link,
      route_view_selector: dataset?.routeViewSelector,
      scroll: !!dataset?.scroll,
      url: dataset?.url,
    };

    if (navigationNode) {
      this.switchRoute(navigationNode);
    } else {
      JrLogger.logError('No url && route_view_selector', {
        navigationNode: navigationNode
      });
    }
  }
  
  initialize(shadowRoot: ShadowRoot | null) {
    if (!shadowRoot) {
      return;
    }

    if (window?.app?.router) {
      JrLogger.logMethod('initialize() if (window?.app?.router', {
        navigationNode: this.navigationNode,
        window: {
          app: window?.app
        }
      });
      // this.navigate(this.url, false);
    } else {
      console.error("Router instance does not exist on window.app");
    }
  }

  // navigate(url: string, addToHistory = true) {
  navigate(navigationNode: INavigationDataChildNode, event: Event, addToHistory = true) {
    JrLogger.logMethod('navigate', {
      navigationNode: navigationNode,
      event: event
    });
    
    if (addToHistory) {
      history.pushState({ route: navigationNode?.url }, "", navigationNode?.url);
    }

    this.navigationNode = navigationNode;
  }
  
  private switchRoute(navigationNode: INavigationDataChildNode) {
    const mainElement = document.querySelector('jr-main')?.shadowRoot as ShadowRoot;
    const routeViewElement = mainElement?.querySelector('jr-route-view');
    
    if (routeViewElement?.navigationNode) {      
      routeViewElement.navigationNode = navigationNode;     
    } else {
      JrLogger.logError('jr-route-view component not found.');
    }
  }
}