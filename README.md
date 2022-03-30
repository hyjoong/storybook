## Storybook

스토리북 사용 이유

- 독립적인 환경에서 UI 컴포넌트를 개발할 수 있다
- 특정한 스냅샷을 스토리로 만들고 테스트할 수 있다
- UI 컴포넌트 라이브러리를 문서화 할 수도 있고, 디자인 시스템을 개발하기 위해 사용할 수도 있다

#### Story Book Setting

아래 명령어로 Storybook을 추가할 수 있다

```
npx sb init
```

#### 결과

Root 경로에 .storybook 폴더에 `main.js`와 `preview.js` 가 생긴다

#### main.js

- [main.js 에는 storybook을 위한 config 설정들이 있다](https://github.com/hyjoong/storybook-mobx/commit/f3ad27207a78d0dc966f8debf3d157d239ac808a)

```javascript
module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
```

#### preview.js

해당 프로젝트의 모든 Story에 global하게 적용될 포맷을 세팅하는 곳

---

### Layout

BaseLayout의 BaseLayoutMain css 속성을

```
  min-height: calc(100vh - 128px);
```

으로 설정했는데 `-128px` 을 한 이유는 `position:fixed`인 Header의 띄우기 위해서 `Root`에 설정한 `padding-top: 4rem;`과 메인 컴포넌트에서 `padding: 2rem 1rem;`의 값인 위 아래 padding값인 `64px` 값을 더한 64+64 = 128px 값이다

그냥 100vh값을 준다면 padding값 때문에 스크롤이 생긴다
