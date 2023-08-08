import useRouter from "./router.js";

const { handleRoute } = useRouter();

window.addEventListener("popstate", handleRoute);

handleRoute();
