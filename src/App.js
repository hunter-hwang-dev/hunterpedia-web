import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Login, Read, Write } from "./pages";

function App() {
  return (
    <div className="App">
      <header>
        <h1>여기에 네비게이션 바 추가하기</h1>
        <Link to="/login">로그인</Link>
        <Link to="/read">글 목록 보기</Link>
        <Link to="/write">글쓰기</Link>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read" element={<Read />} />
      </Routes>
      <footer>
        <p>여기에 푸터 추가하기</p>
      </footer>
    </div>
  );
}
// chore: 디폴트 브랜치 main 변경 확인
export default App;
