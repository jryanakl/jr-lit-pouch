export default class Router {
  private route = window.location.pathname;

  constructor() {
    window.addEventListener("popstate", (event) => {
      this.navigate(event.state?.route || "/", false);
    });
  }

  initialize(shadowRoot: ShadowRoot | null, linkElementSelector: string) {
    if (!shadowRoot) {
      console.error("Shadow root is null.");
      return;
    }

    shadowRoot.querySelectorAll(linkElementSelector).forEach((anchor) => {
      anchor.addEventListener("click", (event) => this.handleLinkClick(event));
    });

    if (window?.app?.router) {
      this.navigate(this.route, false);
    } else {
      console.error("Router instance does not exist on window.app");
    }
  }

  private handleLinkClick(event: Event) {
    event.preventDefault();

    const closestAnchorElement = (event.target as HTMLElement)?.closest("a");
    const targetUrl = closestAnchorElement?.getAttribute("href");

    if (targetUrl) {
      this.switchRoute(targetUrl)
    };
  }

  navigate(path: string, addToHistory = true) {
    if (path !== this.route) {
      if (addToHistory) history.pushState({ route: path }, "", path);
      this.switchRoute(path);
      this.route = path;
    }
  }

  private switchRoute(route: string) {
    const isComponentsRoute = route === "/components";
    const pageElement = this.getPageElement(route);
    const mainContent = document.querySelector("main");

    if (mainContent && pageElement) {
      mainContent.innerHTML = "";
      mainContent.appendChild(pageElement);

      if (isComponentsRoute) {
        this.scrollToHeading(route);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  private getPageElement(route: string): HTMLElement | null {
    switch (route) {
      case "/":
      case "/intro":
        return document.createElement("jr-intro-page");
      case "/components":
        return document.createElement("jr-components-page");
      case "/data":
        return document.createElement("jr-data-page");
      default:
        if (route.startsWith("/tooling")) {
          const pageElement = document.createElement("jr-tooling-page");
          pageElement.dataset.productId = route.split("-").pop() || "";
          return pageElement;
        }
        return null;
    }
  }

  private scrollToHeading(path: string) {
    // Define the mapping from path to h3 ID
    const headingMap: Record<string, string> = {
      "/components": "table-header", // Example for Tree Menu
      // Add mappings for other sections as needed
    };
  
    const headingId = headingMap[path];
    if (headingId) {
      const headingElement = document.getElementById(headingId);
      if (headingElement) {
        const yOffset = -80; // Adjust for any fixed headers, if necessary
        const y = headingElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
