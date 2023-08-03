import List from "./List.js";
import Detail from "./Detail.js";

const root = document.getElementById("root");

const routesMap = new Map([
  ["/", List],
  ["/articles/:id", Detail],
]);

const render = (component) => {
  root.innerHTML = component.template();
  component.method();
};

const handleRoute = () => {
  const path = window.location.pathname;
  const matchingRoute = Array.from(routesMap.keys()).find((route) =>
    getIsMatchPath(path, route)
  );
  const component = routesMap.get(matchingRoute);
  render(component);
};

const getIsMatchPath = (path, route) => {
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

const push = (path, queryParams) => {
  const searchParams = new URLSearchParams(queryParams);
  const newPath = queryParams ? path + "?" + searchParams.toString() : path;

  history.pushState(queryParams, "", newPath);
  handleRoute();
};

const getParams = () => {
  const path = window.location.pathname;
  const matchingRoute = Array.from(routesMap.keys()).find((route) =>
    getIsMatchPath(path, route)
  );

  const params = {};

  const pathSegments = path.split("/").filter((segment) => segment !== "");
  const routeSegments = matchingRoute
    .split("/")
    .filter((segment) => segment !== "");

  for (let i = 0; i < routeSegments.length; i++) {
    const routeSegment = routeSegments[i];
    if (routeSegment.startsWith(":"))
      params[routeSegment.slice(1)] = pathSegments[i];
  }

  return params;
};

const getQueryParams = () => {
  const urlParams = new URLSearchParams(location.search);
  const queryParamsObject = {};

  for (const [key, value] of urlParams.entries()) {
    queryParamsObject[key] = value;
  }

  return queryParamsObject;
};

export { handleRoute, push, getParams, getQueryParams };
