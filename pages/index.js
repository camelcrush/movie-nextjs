import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //즉시 실행 함수 표현
  // ()() : 즉시 실행 함수로, 클로져를 활용할 수 있다. 내부 함수는 변수나 다른 함수등을 쓸 수 있지만,
  // 이 함수 밖에서는 완전히 캡슐화되어 접근 할 수 없다.
  //   (async () => {
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// getServerSideProps
// page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우
//  Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render합니다.
// getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않습니다.
// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

// SSR방식은 Api데이터를 포함하여 서버에서 HTML로 UI렌더링을 한 후 ReactJS로 데이터를 Props로 전달
// 해당 페이지의 데이터가 들어오기 전 까진 아무것도 렌더링 되지 않음

// SSR방식은 ReactJS로부터 HTML(쉘)을 렌더링 한 후 Loading...(모든 JS파일)을 거쳐 데이터를 받은 뒤 데이터 렌더링
// 데이터들이 HTML으로 표시되지는 않음 SSR 방식보다는 빠르게 화면을 볼 수 있다고 이해

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
