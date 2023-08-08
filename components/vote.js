import { applyStyle } from "../utils/css.js";

const Vote = {
  componentDidMount: () => {
    applyStyle("/css/vote.css");
  },
  render: () => {
    return `
      <div id="wrapper">
        <h3>재미있게 읽으셨나요?</h3>
        <p>좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
        <div id="emoji-wrapper">
          <div>😍</div>
          <div>🤔</div>
        </div>
        <button id="share-button">
          <img src="/assets/icons/chain.svg" />
          아티클 공유하기
        </button>
      </div>
    `;
  },
};

export default Vote;
