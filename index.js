const goDetail = (event) => {
  const articleId = event.target.dataset.article;
  const url = `detail.html?articleId=${encodeURIComponent(articleId)}`;
  location.href = url;
};

const detailButton = document.querySelectorAll(".detail-btn");
detailButton.forEach((button) => {
  button.addEventListener("click", goDetail);
});
