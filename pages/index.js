import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //즉시 실행 함수 표현
    // ()() : 즉시 실행 함수로, 클로져를 활용할 수 있다. 내부 함수는 변수나 다른 함수등을 쓸 수 있지만,
    // 이 함수 밖에서는 완전히 캡슐화되어 접근 할 수 없다.
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
