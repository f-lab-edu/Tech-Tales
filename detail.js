const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("articleId");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("articleId").textContent = `${articleId}번`;
});
