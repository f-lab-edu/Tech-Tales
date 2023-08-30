import articleList from "data/articles";
import useRouter from "utils/router";
import Layout from "layout/index";
import Vote from "components/vote";

import "css/articleDetail";

const ArticleDetailPage = {
  componentDidMount: () => {
    Vote.componentDidMount();
  },
  render: () => {
    const { getParams } = useRouter();
    const params = getParams();

    const article = articleList.find((article) => article.id === Number(params.id));

    return `
      <div>
        <img class="article-image" src="${article.image}" />
        <h1 class="article-title">${article.title}</h1>
        <div class="upload-wrapper">
          <img class="uploader-image" src="${article.uploader.image}" />
          <div>
            <span class="uploader-name">${article.uploader.name}</span>
            <span class="upload-date">${article.uploadDate}</span>
          </div>
        </div>
        <div class="main-content">
          ${article.content()}
        </div>
      </div>
      ${Vote.render()}
   `;
  },
};

export default Layout(ArticleDetailPage);
