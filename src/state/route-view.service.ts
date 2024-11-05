
import { INavigationDataChildNode } from '../ui/navigation/navigation';
import JrLogger from '../utils/logger.js';


export class JrRouteViewService {
  
  static scrollToRouteView(navigationNode: INavigationDataChildNode,
                          routeViewElement: HTMLElement): void {
    if (navigationNode?.scroll && navigationNode?.route_view_selector) {
      const routeViewChildElement = document.getElementById(navigationNode.route_view_selector);

      if (routeViewChildElement) {
        const yOffset = -80; // Adjust for any fixed headers, if necessary
        const y = routeViewChildElement.getBoundingClientRect().top + window.scrollY + yOffset;
        
        JrLogger.logMethod('scrollToRouteView', {
          routeViewElement: routeViewElement,
          navigationNode: navigationNode,
        });

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    } else {
      setTimeout(function() {
        JrLogger.logError('scrollToRouteView');
      }, 400);
    }
  }
  
  static scrollPage(navigationNode: INavigationDataChildNode, 
                    routeViewElement: HTMLElement): void {
    
    if (navigationNode?.scroll) {
      JrRouteViewService.scrollToRouteView(navigationNode, routeViewElement);
    } else {
      window.scrollTo(0, 0);
    }                  
  }
}
