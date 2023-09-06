describe("router", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("상세 페이지 이동", () => {
    // 목록 페이지 열기
    cy.visit("/");

    // 첫번째 상세페이지로 이동하는 버튼 클릭
    cy.get(".detail-button").eq(0).click();

    // 주소에 articles/1이 포함되어있는지 확인
    cy.url().should("include", "/articles/1");
  });

  it("상세 페이지 정상적 로드 확인", () => {
    // 두번째 상세페이지로 이동
    cy.visit("/");
    cy.get(".detail-button").eq(1).click();

    // 업로더 이름 확인
    cy.get(".uploader-name").eq(0).should("include.text", "표상영");
    // 아티클 제목 확인
    cy.get(".article-title").eq(0).should("include.text", "Node.js url.parse() 취약점 컨트리뷰션");
  });
});
