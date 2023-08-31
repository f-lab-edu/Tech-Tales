import useRouter from "utils/router";

const { handleRoute } = useRouter();

window.addEventListener("popstate", handleRoute);

handleRoute();
