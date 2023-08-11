const Page = (content) => {
  return {
    componentDidMount: () => {
      content.componentDidMount();
    },
    render: () => `
      <div>
        <h2 id="page-title">${content.props.title}</h2>
        ${content.render()}
      </div>
    `,
  };
};

export default Page;
