import { applyStyle } from "../../utils/css.js";
import useRouter from "../../utils/router.js";

const Layout = (page) => {
  return {
    componentDidMount: () => {
      const { push } = useRouter();

      document.querySelector(".logo-img").addEventListener("click", () => push("/"));

      applyStyle("/css/layout.css");
      page.componentDidMount();
    },
    render: () => `
      <header>
        <div class="header-inner">
          <nav>
            <img class="logo-img" src="/assets/icons/logo.svg" />
            <ul class="button-list">
              <li>
                <button class="subject">디자인</button>
              </li>
              <li>
                <button class="subject">개발</button>
              </li>
              <li>
                <button class="hire">채용 바로가기</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        ${page.render()}
      </main>
      <section class="hire-section">
        <div class="hire-section-inner">
          <img class="section-img" src="/assets/images/code-blue.png" />
          <div>
            <div class="description">
              <strong>토스팀이 만드는 수많은 혁신의 순간들</strong>
              <p>당신과 함께 만들고 싶습니다.<br />지금, 토스팀에 합류하세요.</p>
            </div>
            <button>채용 중인 공고 보기</button>
          </div>
        </div>
      </section>
      <footer>
        <div class="footer-inner">
          <div class="footer-sites">
            <div class="footer-site">
              <div>토스테크</div>
              <ul>
                <li>의견 보내기</li>
              </ul>
            </div>
            <div class="footer-site">
              <div>토스</div>
              <ul>
                <li>홈페이지</li>
                <li>회사 소개</li>
                <li>채용</li>
              </ul>
            </div>
            <div class="footer-site">
              <div>고객센터</div>
              <ul>
                <li>전화: 1599-4905 (24시간 연중무휴)</li>
                <li>이메일: support@toss.im</li>
                <li>카카오톡: @toss</li>
              </ul>
            </div>
          </div>
          <address>
            <strong>㈜비바리퍼블리카</strong>
            Copyright © Viva Republica, Inc. All Rights Reserved.
          </address>
          <ul class="social-list">
            <li>
              <button><img src="/assets/icons/facebook.svg" /></button>
            </li>
            <li>
              <button><img src="/assets/icons/blog.svg" /></button>
            </li>
            <li>
              <button><img src="/assets/icons/naver.svg" /></button>
            </li>
            <li>
              <button><img src="/assets/icons/twitter.svg" /></button>
            </li>
            <li>
              <button><img src="/assets/icons/instagram.svg" /></button>
            </li>
          </ul>
        </div>
      </footer>
    `,
  };
};

export default Layout;
