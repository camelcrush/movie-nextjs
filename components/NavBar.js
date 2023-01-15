import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  // React Hook : 앱의 함수 컴포넌트에서 router객체 내부에 접근
  const router = useRouter();
  return (
    // 페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요
    // Just don't use `a` inside of `Link`, or use `legacyBehavior`
    // Link 에 legacyBehavior 를 넣어주시면 a 태그 사용이 가능하고 스타일도 입힐 수 있습니다.
    <nav>
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

// Built-In CSS Support (내장 CSS 지원)

// Next.js를 사용하면 JavaScript 파일에서 CSS 파일을 가져올 수 있습니다.
// 이것은 Next.js가 import 개념을 JavaScript 이상으로 확장하기 때문에 가능합니다.

// CSS-in-JS
// 격리된 범위 CSS에 대한 지원을 제공하기 위해 styled-jsx를 번들로 제공합니다. 목표는 불행히도 서버 렌더링을 지원하지 않고 JS 전용인 Web Components와 유사한 "Shadow CSS"를 지원하는 것입니다.
// https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js

// styled-jsx를 사용하는 컴포넌트는 다음과 같습니다.
// ```
// < style jsx>{`
// CSS 스타일..
// `}< /style>
// ```
// styled-jsx
// https://github.com/vercel/styled-jsx

// Adding Component-Level CSS
// Next.js는[name].module.css 파일 명명 규칙을 사용하여 CSS Module을 지원합니다.

// Sass Support
// Next.js를 사용하면.scss 및.sass 확장자를 모두 사용하여 Sass를 가져올 수 있습니다.
