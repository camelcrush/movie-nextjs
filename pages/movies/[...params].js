import Seo from "@/components/Seo";
import { useRouter } from "next/router";

// Dynamic Routes
// Next.js에서는 page에 대괄호([param])를 추가하여 Dynamic Route를 생성할 수 있습니다.
// /movies/1, /movies/abc 등과 같은 모든 경로는 pages/movies/[id].js와 일치합니다.
// ```
// const router = useRouter()
// const { id } = router.query
// ```
// https://nextjs.org/docs/routing/dynamic-routes

// Catch all routes
// 대괄호 안에 세 개의 점(...)을 추가하여 모든 경로를 포착하도록 Dynamic Routes를 확장할 수 있습니다.
//  pages/movies/[...id].js는 /movies/1와 일치하지만 /movies/1/2, /movies/1/ab/cd 등과도 일치합니다.
// 일치하는 매개변수는 페이지에 쿼리 매개변수로 전송되며 항상 배열이므로 /movies/a 경로에는 다음 쿼리 개체가 있습니다.
// ex) { "id": ["a"] }
// https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes

export default function Detail({ params }) {
  // 혹시나 저처럼 왜 || [] 를 추가해주면 되는건지 궁금하신분들을 위해 남겨봅니다.
  // 기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다.
  // 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다.
  // 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고, js가 내려가서 다시 렌더링하게되면
  // 그 때는 빈 배열이 아닌 router.query.params에서 값을 가져와서 뿌려주는거죠.
  const router = useRouter();
  // useRouter는 CSR방식: 유저가 URL로 다이렉트로 들어올 경우,
  // index.js에서 라우터로 params를 전달하지 않았기 때문에 빈값이 발생함
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// getServerSideProps (Context parameter)
// params: 이 페이지에서 dynamic route(동적 경로)를 사용하는 경우 params에 route parameter가 포함됩니다.
// 페이지 이름이 [id].js이면 params는 { id: ... }처럼 보일 것입니다.
// query: 쿼리 문자열을 나타내는 객체입니다.
// https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
