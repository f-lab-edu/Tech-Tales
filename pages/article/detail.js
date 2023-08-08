import useRouter from "../../router.js";

const ArticleDetailPage = {
  componentDidMount: () => {
    const { getParams, push } = useRouter();

    const params = getParams();
    const $backButton = document.querySelector(".back-button");

    document.getElementById("articleId").textContent = `${params.id}번`;
    $backButton.addEventListener("click", () => push("/"));
  },
  render: () => {
    return `
      <div>
        <h1><span id="articleId"></span> 상세페이지</h1>
        <button class="back-button">목록 페이지 이동</button>
      </div>
   `;
  },
};

export default ArticleDetailPage;
