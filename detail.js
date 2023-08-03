import { getParams, push } from "./router.js";

const Detail = {
  method: () => {
    const params = getParams();
    const $backButton = document.querySelector(".back-button");

    document.getElementById("articleId").textContent = `${params.id}번`;
    $backButton.addEventListener("click", () => push("/"));
  },
  template: () => {
    return `
      <div>
        <h1><span id="articleId"></span> 상세페이지</h1>
        <button class='back-button'>목록 페이지 이동</button>
      </div>
   `;
  },
};

export default Detail;
