export class RouterService {
    constructor() {
        this.route = '/';
        this.route = window.location.pathname;
        window.onpopstate = () => this.handleRouteChange();
    }
    navigate(path) {
        if (path !== this.route) {
            history.pushState(null, '', path);
            this.handleRouteChange();
        }
    }
    handleRouteChange() {
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
