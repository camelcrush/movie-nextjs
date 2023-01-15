import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Custom App

// Next.js는 App 컴포넌트를 사용하여 page를 초기화합니다. 이를 재정의하고 페이지 초기화를 제어할 수 있습니다. 이를 통해 다음과 같은 놀라운 일을 할 수 있습니다.

// 1. 페이지 변경 간에 레이아웃 유지
// 2. 페이지 탐색 시 state 유지
// 3. componentDidCatch를 사용한 Custom 에러 처리
// 4. 페이지에 추가 데이터 삽입
// 5. Global CSS 추가

// 기본 App을 재정의하려면 아래와 같이 ./pages/_app.js 파일을 만듭니다.
// ```
// export default function MyApp({ Component, pageProps }) {
// return < Component {...pageProps} />
// }
// ```
// https://nextjs.org/docs/advanced-features/custom-app

// Custom App (with 타입스크립트)
// _app.ts가 아닌 _app.tsx파일을 만들고 아래와 같이 작성
// ```
// import type { AppProps } from 'next/app'

// export default function MyApp({ Component, pageProps }: AppProps){
// return < Component {...pageProps} />
// }
// ```
// https://nextjs.org/docs/basic-features/typescript#custom-app

// + 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
// https://nextjs.org/docs/messages/css-global
