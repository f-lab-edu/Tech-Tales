import "../../css/page.css";

const Page = (props) => {
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
