import Seo from "@/components/Seo";

// pages 폴더 안에 있는 파일명에 따라 route가 결정 : index는 예외
export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
}
