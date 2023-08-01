import List from "./List.js";
import Detail from "./Detail.js";

const root = document.getElementById("root");

const routesMap = new Map([
  ["/", List],
  ["/detail", Detail],
]);

const render = (component) => {
  root.innerHTML = component.template();
  component.method();
};

const handleRoute = () => {
  const path = window.location.pathname;
  const component = routesMap.get(path);
  render(component);
};

const push = (path, queryParams) => {
  const searchParams = new URLSearchParams(queryParams);
  const newPath = queryParams ? path + "?" + searchParams.toString() : path;

  history.pushState(queryParams, "", newPath);
  handleRoute();
};

const getQueryParams = () => {
  const urlParams = new URLSearchParams(location.search);
  const queryParamsObject = {};

  for (const [key, value] of urlParams.entries()) {
    queryParamsObject[key] = value;
  }

  return queryParamsObject;
};

window.addEventListener("popstate", handleRoute);

handleRoute();

export { handleRoute, push, getQueryParams };
