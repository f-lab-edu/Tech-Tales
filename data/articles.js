import FrontendDivingImage from "assets/images/articles/frontend-diving-club.jpg";
import NodejsSecurityImage from "assets/images/articles/node-js-security.png";
import YurimJinImage from "assets/images/people/yurim-jin.jpg";
import PyozziImage from "assets/images/people/pyozzi.jpeg";

const articleList = [
  {
    id: 1,
    image: FrontendDivingImage,
    title: "놀러오세요! 프론트엔드 다이빙 클럽",
    description: "프론트엔드에 관한 깊은 이야기를 나눌 수 있는 오프라인 커뮤니티, 프론트엔드 다이빙 클럽을 소개합니다.",
    uploadDate: "2023. 7. 21",
    uploader: {
      name: "진유림",
      image: YurimJinImage,
    },
    content: () => "<div>내용</div>",
  },
  {
    id: 2,
    image: NodejsSecurityImage,
    title: "Node.js url.parse() 취약점 컨트리뷰션",
    description:
      "토스 보안기술팀은 안전한 금융 서비스를 제공하기 위한 연구를 수행하고 있어요. 많은 서비스에서 사용되고 있는 Node.js의 취약점을 분석하고 안전하게 패치될 수 있도록 기여했던 과정을 소개드려요.",
    uploadDate: "2023. 5. 12",
    uploader: {
      name: "표상영 ㆍ Security Researcher",
      image: PyozziImage,
    },
    content: () => "<div>내용</div>",
  },
];

export default articleList;
