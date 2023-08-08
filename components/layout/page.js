import { applyStyle } from "../../utils/css.js";

const Page = (content, props) => {
  return {
    componentDidMount: () => {
      applyStyle("/css/page.css");
      content.componentDidMount();
    },
    render: () => `
      <div>
        <h2 id="page-title">${props.title}</h2>
        ${content.render()}
      </div>
    `,
  };
};

export default Page;
