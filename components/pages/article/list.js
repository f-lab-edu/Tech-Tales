import articleList from "data/articles";
import useRouter from "utils/router";
import Layout from "layout/index";
import Page from "layout/page";

import "css/articleList";

const ArticleListPage = {
  componentDidMount: () => {
    const { push } = useRouter();

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
      <div class="article-wrapper">
        ${articleList
          .map(
            (article) => `
              <button data-article="${article.id}" class="detail-button">
                <img class="article-list-image" src="${article.image}" />
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
  title: "개발",
};

export default Layout(Page(ArticleListPage));
