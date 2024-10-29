export class RouterService {
  private route: string = '/';

  constructor() {
    this.route = window.location.pathname;
    window.onpopstate = () => this.handleRouteChange();
  }

  navigate(path: string) {
    if (path !== this.route) {
      history.pushState(null, '', path);
      this.handleRouteChange();
    }
  }

  private handleRouteChange() {
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
