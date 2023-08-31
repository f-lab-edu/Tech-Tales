# Tech-Tales

프로젝트 기간: 4주  
프로젝트 유형: 개인 사이드 프로젝트

## 소개

토스 기술 블로그를 참고하여 기술에 대한 이야기를 모아두는 기술 블로그입니다.

Vanilla JavaScript로 Single Page Application을 개발하였습니다.  
index.html의 html 파일 하나와 index.ts로 시작하는 TypeScript 파일들로 구성되어 있습니다.

router.ts 파일을 활용하여 라우터 기능을 구현하였습니다.

## 설치 및 시작하기

먼저 [Node.js](https://nodejs.org/ko)와 [Git](https://git-scm.com/)이 설치되어 있어야합니다.

```
git clone https://github.com/f-lab-edu/Tech-Tales.git
cd tech-tales
npm install
npm start
```

이후 서버가 열리면 http://localhost:9000 에서 확인할 수 있습니다.

## 사용 기술

- 언어: HTML, CSS, JavaScript, TypeScript
- 라이브러리: [Jest](https://jestjs.io/), [Cypress](https://www.cypress.io/), [Webpack](https://webpack.kr/)
- 기타: [Node.js](https://nodejs.org/ko)(18.7.0), [npm](https://www.npmjs.com/)(8.15.0)

## 폴더 구조 설계

필요한 파일들끼리 적합하게 묶어 개발 및 유지보수가 간편하도록 하였습니다.

- assets
  - 프로젝트 내에서 사용되는 이미지나 아이콘 등을 모아두어 사용했습니다.
- components
  - 컴포넌트들을 모아둔 폴더입니다.
  - 카테고리별로 폴더를 만들어 컴포넌트를 모아둡니다.
- css
  - 각 컴포넌트 별로 만들어진 css 파일을 모아둡니다.
- data
  - 이 프로젝트에서 백엔드와 통신은 하지 않기에 필요한 data를 모아서 사용합니다.
- utils
  - 프로젝트 내에서 필요한 유틸리티 들을 모아둡니다.

## 기능 설명

### SPA 구성

- Single Page Application, 즉 하나의 html 파일, index.html만 생성하여 프로젝트를 만들었습니다.
- index.html의 body에 위치한 \<div id="root">\</div>를 통해 각 페이지의 컴포넌트를 동적으로 렌더링합니다.
- 페이지 주소에 따라 각 컴포넌트를 렌더링하여 보여줍니다. 이를 위해 컴포넌트 전환을 처리하는 router.ts 모듈을 구현하였습니다.

- 각 컴포넌트는 객체 또는 함수 형식을 띄고 있습니다.
- 모두 반환되는 값은 객체 형식으로 화면을 그릴 때 실행시키는 함수인 componentDidMount, html형식의 문자열을 반환하는 함수인 render를 가지게 됩니다.
- 추가로 key, value 쌍으로 property를 추가하여 해당 컴포넌트를 다른 컴포넌트에서 사용할 때 해당하는 값들을 사용할 수 있게 됩니다.

### Router 설명

useRouter라는 하나의 함수를 만들고 4가지의 함수를 반환시켜 사용하도록 했습니다.  
클로저를 사용하여 내보내야 하지 않아야할 함수를 숨겨 정보 은닉을 구현했습니다.

router 기능

- routesMap
  - key에는 pathname, value에는 컴포넌트를 주어 Map을 만듭니다.
  - 현재 pathname과 이 Map 내의 pathname을 비교하여 컴포넌트를 보여줍니다.
  - :queryKey와 같이 콜론과 함께 사용할 경우 dynamic routing이 가능해지고 getParams 함수를 사용하여 해당 자리에 들어간 값을 가져올 수 있습니다.
  - key에 \*을 둘 경우 404 페이지, 즉 이 Map에 만들어 두지 않은 주소에 접속할 경우 보여줄 컴포넌트를 보여주게 됩니다.
- handleRoute
  - 현재 pathname을 가져와 routesMap에서 컴포넌트를 가져오고 페이지를 실제로 그리는 함수입니다.
- push
  - 페이지를 이동하는 함수입니다.
  - path(이동할 주소), queryParams(사용할 queryParams)를 받아서 이동시킵니다.
  - pushState를 사용하여 페이지를 새로 그리지 않고 페이지 전환을 시켰습니다.
- getParams
  - dynamic routing된 현재 페이지의 동적으로된 값을 객체로 받을 수 있는 함수입니다.
  - /articles/:id를 설정해두고 현재 페이지가 /articles/5라면 {id: 5}라는 객체를 받을 수 있습니다.
- getQueryParams
  - query parameter의 값을 받을 수 있는 함수입니다.
  - 현재 페이지가 /articles?id=5라면 {id: 5}라는 객체를 받을 수 있습니다.

### 추가 하고싶은 기능들

- MSW(Mock Service Worker)를 사용하여 백엔드 API를 모킹하여 백엔드가 있는 것처럼 실행시키고 싶습니다.
- CI/CD 기능 추가
  - Repository에 Push 할 때 마다 테스트, 빌드를 실행시켜 결과를 확인한 후 merge를 하고자 합니다.
  - CI에 통과했을 경우 클라우드 컴퓨팅 서비스를 활용하여 실 서버에 배포를 시켜 어디에서나 접근이 가능하고자 합니다.
