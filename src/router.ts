export default class Router {
  private route: string = '/';

  constructor() {
    this.route = window.location.pathname;
    window.onpopstate = () => this.handleRouteChange();
  }

  initialize(shadowRoot: ShadowRoot | null, linkElementSelector: string) {
    if (shadowRoot) {
      shadowRoot!.querySelectorAll(linkElementSelector).forEach(a => {
        a.addEventListener('click', event => {
          console.log('the following anchor has been default prevented', a);
          event.preventDefault();

          const anchorElement = (event.target as HTMLElement)?.closest('a');
          let url = anchorElement?.getAttribute("href");

          if (url) {
            this.switchRoute(url);
          }
        });
      });
    }

    // Event Handler for URL changes
    window.addEventListener("popstate", event => {
      this.navigate(event.state.route, false);
    });

    if (window?.app?.router) {
      console.log('window app router', window.app.router);
      this.navigate(location.pathname);
    } else {
      console.error('router does not exist on window.app.router', { window: window });
    }
  }

  navigate(path: string, addToHistory = true) {
    console.log(`%cRouter`, 'font-size: 14px; color: blue;');
    console.log(`navigate() to ${path}`);
    console.log('addToHistory', addToHistory);

    if (path !== this.route) {
      history.pushState(null, '', path);
      this.switchRoute(this.route);
      //this.handleRouteChange();
    }
  }

  switchRoute(route: string, addToHistory = true) {
    console.log(`%cswitchRoute`, 'font-size: 14px; color: green;');
    //let route = window?.app?.route;
    let pageElement = null;
    let gridBlockElement = null;
    console.log('addToHistory', addToHistory);
    console.log('gridBlockElement', gridBlockElement);

    switch (route) {
      case "/":
        gridBlockElement = document.createElement("jr-intro");
        pageElement = document.createElement("jr-intro-page");
        break;
      case "/intro":
        gridBlockElement = document.getElementById('jr-intro');
        pageElement = document.createElement("jr-intro-page");
        break;
      case "/components":
        gridBlockElement = document.createElement("jr-components");
        pageElement = document.createElement("jr-components-page");
        break;
      case "/data":
        gridBlockElement = document.createElement("jr-data");
        pageElement = document.createElement("jr-data-page");
        break;
      default:
        if (route.startsWith("/tooling")) {
          gridBlockElement = document.createElement("jr-tooling");
          pageElement = document.createElement("jr-tooling-page");
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramId;
        }
    }

    if (pageElement) {
      const cache = document.querySelector("main");

      if (cache) {
        cache.innerHTML = "";
        cache.appendChild(pageElement);
      }

      window.scrollX = 0;
      window.scrollY = 0;
    }
  }

  private handleRouteChange() {
    console.log(`%cRouter`, 'font-size: 14px; color: blue;');
    console.log('handleRouteChange()');

    this.route = window.location.pathname;
    const routeEvent = new CustomEvent('route-changed', {
      detail: { route: this.route },
      bubbles: true,
      composed: true
    });
    window.dispatchEvent(routeEvent);
  }

  get currentRoute() {
    return this.route;
  }
}
