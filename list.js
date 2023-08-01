import { push } from "./index.js";

const List = {
  method: () => {
    const goDetail = (event) => {
      const articleId = event.target.dataset.article;
      push("/detail", { articleId: articleId });
    };

    const $detailButton = document.querySelectorAll(".detail-button");
    $detailButton.forEach((button) =>
      button.addEventListener("click", goDetail)
    );
  },
  template: () => {
    return `
      <div>
        <h1>목록페이지</h1>
        <button data-article="1" class="detail-button">1번 상세페이지 이동</button>
        <button data-article="2" class="detail-button">2번 상세페이지 이동</button>
        <button data-article="3" class="detail-button">3번 상세페이지 이동</button>
      </div>
    `;
  },
};

export default List;
