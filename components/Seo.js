import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{`${title} | Next Movies`}</title>
    </Head>
  );
}

// Head (next/head)
// 페이지 head에 엘리먼트를 추가하기 위한 내장 컴포넌트를 노출합니다.
// head에 태그가 중복되지 않도록 하려면 다음 예제와 같이 태그가 한 번만 렌더링되도록 하는 key 속성을 사용할 수 있습니다.
// 이 경우 두 번째 meta property="og:title"만 렌더링됩니다. 중복 키 속성이 있는 메타 태그는 자동으로 처리됩니다.
// ```
// // key를 지정해주지 않으면 meta og:title가 중복해서 2번 랜더링됩니다.
// // (title은 지정하지 않아도 2번 랜더링 되지 않음)
// < Head>
// < title>My page title< /title>
// < meta property="og:title" content="My page title" key="title" />
// < /Head>
// < Head>
// < meta property="og:title" content="My new title" key="title" />
// < /Head>
// ```
// https://nextjs.org/docs/api-reference/next/head
