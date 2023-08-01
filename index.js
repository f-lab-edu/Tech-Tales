import List from "./List.js";
import Detail from "./Detail.js";

const root = document.getElementById("root");

const routesMap = new Map([
  ["/", List],
  ["/detail", Detail],
]);

const render = (component) => {
  root.innerHTML = component.template;
  component.function();
};

const handleRoute = () => {
  const path = window.location.pathname;
  const component = routesMap.get(path);
  render(component);
};

window.addEventListener("popstate", handleRoute);

handleRoute();

export { handleRoute };
