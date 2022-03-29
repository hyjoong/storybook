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
