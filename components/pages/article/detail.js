import articleList from "../../../data/articles.js";
import { applyStyle } from "../../../utils/css.js";
import useRouter from "../../../utils/router.js";
import Layout from "../../layout/index.js";
import Vote from "../../vote.js";

const ArticleDetailPage = {
  componentDidMount: () => {
    applyStyle("/css/articleDetail.css");
    Vote.componentDidMount();
  },
  render: () => {
    const { getParams } = useRouter();
    const params = getParams();

    const article = articleList.find((article) => article.id === Number(params.id));

    return `
      <div>
        <img id="article-image" src="/assets/images/articles/${article.image}" />
        <h1 id="article-title">${article.title}</h1>
        <div id="upload-wrapper">
          <img id="uploader-image" src="/assets/images/people/${article.uploader.image}" />
          <div>
            <span id="uploader-name">${article.uploader.name}</span>
            <span id="upload-date">${article.uploadDate}</span>
          </div>
        </div>
        <div id="main-content">
          ${article.content()}
        </div>
      </div>
      ${Vote.render()}
   `;
  },
};

export default Layout(ArticleDetailPage);
