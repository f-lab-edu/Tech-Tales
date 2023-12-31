import "css/vote";
import ChainIcon from "assets/icons/chain.svg";

const Vote = {
  componentDidMount: () => {},
  render: () => {
    return `
      <div class="vote-wrapper">
        <h3>재미있게 읽으셨나요?</h3>
        <p>좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
        <div class="emoji-wrapper">
          <div>😍</div>
          <div>🤔</div>
        </div>
        <button class="share-button">
          <img src="${ChainIcon}" />
          아티클 공유하기
        </button>
      </div>
    `;
  },
};

export default Vote;
