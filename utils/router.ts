import ArticleListPage from "components/pages/article/list";
import ArticleDetailPage from "components/pages/article/detail";
import NotFoundPage from "components/pages/404";

export interface Component {
  componentDidMount: () => void;
  render: () => string;
  [key: string]: string | number | Function;
}

const useRouter = () => {
  const root = document.getElementById("root");

  const routesMap: Map<string, Component> = new Map([
    ["/", ArticleListPage],
    ["/articles/:id", ArticleDetailPage],
    ["*", NotFoundPage],
  ]);

  const createPage = (component: Component) => {
    root.innerHTML = component.render();
    component.componentDidMount();
  };

  const handleRoute = () => {
    const path = window.location.pathname;
    const matchingRoute = Array.from(routesMap.keys()).find((route) => isMatchedPath(path, route));
    const pageComponent = routesMap.get(matchingRoute || "*");
    createPage(pageComponent);
  };

  const isMatchedPath = (path: string, route: string) => {
    const pathSegments = path.split("/").filter((segment) => segment !== "");
    const routeSegments = route.split("/").filter((segment) => segment !== "");

    if (pathSegments.length !== routeSegments.length) return false;

    for (let i = 0; i < routeSegments.length; i++) {
      const routeSegment = routeSegments[i];
      if (routeSegment.startsWith(":")) continue;
      if (routeSegment !== pathSegments[i]) return false;
    }

    return true;
  };

  const push = (path: string, queryParams?: string) => {
    const searchParams = new URLSearchParams(queryParams);
    const newPath = queryParams ? path + "?" + searchParams.toString() : path;

    history.pushState(queryParams, "", newPath);
    handleRoute();
  };

  const getParams = () => {
    const path = window.location.pathname;
    const matchingRoute = Array.from(routesMap.keys()).find((route) => isMatchedPath(path, route));

    const params: { [key: string]: string } = {};

    const pathSegments = path.split("/").filter((segment) => segment !== "");
    const routeSegments = matchingRoute.split("/").filter((segment) => segment !== "");

    for (let i = 0; i < routeSegments.length; i++) {
      const routeSegment = routeSegments[i];
      if (routeSegment.startsWith(":")) params[routeSegment.slice(1)] = pathSegments[i];
    }

    return params;
  };

  const getQueryParams = () => {
    const urlParams = new URLSearchParams(location.search);
    const queryParamsObject: { [key: string]: string } = {};

    for (const [key, value] of urlParams.entries()) {
      queryParamsObject[key] = value;
    }

    return queryParamsObject;
  };

  return { handleRoute, push, getParams, getQueryParams };
};

export default useRouter;
