import { handleRoute } from "./index.js";

const Detail = {
  function: () => {
    const backBtn = document.querySelector(".back-btn");
    backBtn.addEventListener("click", () => {
      window.history.pushState({}, "", "/");
      handleRoute();
    });
  },
  template: `
    <div>
      <h1>상세페이지</h1>
      <button class='back-btn'>목록 페이지 이동</button>
    </div>
  `,
};

export default Detail;
