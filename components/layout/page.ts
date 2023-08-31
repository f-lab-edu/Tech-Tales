import { Component } from "utils/router";

import "css/page";

const Page = (props: Component) => {
  return {
    componentDidMount: () => {
      props.componentDidMount();
    },
    render: () => `
      <div>
        <h2 class="page-title">${props.title}</h2>
        ${props.render()}
      </div>
    `,
  };
};

export default Page;
