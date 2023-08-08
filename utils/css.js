const applyStyle = (path) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = path;

  document.head.appendChild(linkElement);
};

export { applyStyle };
