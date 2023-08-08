import articleList from "../../../data/articles.js";
import { applyStyle } from "../../../utils/css.js";
import useRouter from "../../../utils/router.js";
import Layout from "../../layout/index.js";
import Page from "../../layout/page.js";

const ArticleListPage = {
  componentDidMount: () => {
    const { push } = useRouter();

    applyStyle("/css/articleList.css");

    const goDetail = (event) => {
      const articleButton = event.target.closest(".detail-button");
      if (articleButton) {
        const articleId = articleButton.dataset.article;
        push(`/articles/${articleId}`);
      }
    };

    const $detailButton = document.querySelectorAll(".detail-button");
    $detailButton.forEach((button) => button.addEventListener("click", goDetail));
  },
  render: () => {
    return `
      <div class="wrapper">
        ${articleList
          .map(
            (article) => `
              <button data-article="${article.id}" class="detail-button">
                <img class="article-image" src="/assets/images/articles/${article.image}" />
                <div>
                  <h3>${article.title}</h3>
                  <p>${article.description}</p>
                  <small>${article.uploadDate}</small>
                </div>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  },
};

export default Layout(Page(ArticleListPage, { title: "개발" }));
