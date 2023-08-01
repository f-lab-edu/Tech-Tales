import { handleRoute } from "./index.js";

const List = {
  function: () => {
    const detailBtn = document.querySelector(".detail-btn");
    detailBtn.addEventListener("click", () => {
      window.history.pushState({}, "", "/detail");
      handleRoute();
    });
  },
  template: `
    <div>
      <h1>목록페이지</h1>
      <button class='detail-btn'>상세페이지 이동</button>
    </div>
  `,
};

export default List;
