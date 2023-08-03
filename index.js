import { handleRoute } from "./router.js";

window.addEventListener("popstate", handleRoute);

handleRoute();
