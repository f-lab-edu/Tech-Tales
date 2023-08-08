import useRouter from "./utils/router.js";

const { handleRoute } = useRouter();

window.addEventListener("popstate", handleRoute);

handleRoute();
