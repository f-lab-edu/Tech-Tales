import useRouter from "../utils/router.js";

describe("router", () => {
  // 기본 html 설정 및 location 삭제
  document.body.innerHTML = `<div id="root"></div>`;

  const { handleRoute, getParams, getQueryParams } = useRouter();

  let originalLocation;

  beforeEach(() => {
    originalLocation = window.location;
    delete window.location;
  });

  afterEach(() => {
    window.location = originalLocation;
  });

  test("handleRoute", () => {
    window.location = {
      pathname: "/articles/2",
    };
    handleRoute();

    const uploaderName = document.getElementsByClassName("uploader-name")[0].textContent;
    const articleTitle = document.getElementsByClassName("article-title")[0].textContent;

    expect(articleTitle).toBe("Node.js url.parse() 취약점 컨트리뷰션");
    expect(uploaderName).toContain("표상영");
  });

  test("getParams", () => {
    window.location = { pathname: "/articles/2" };

    const params = getParams();

    expect(params.id).toBe("2");
  });

  test("getQueryParams", () => {
    window.location = { search: "?id=30" };

    const queryParams = getQueryParams();

    expect(queryParams.id).toBe("30");
  });
});
