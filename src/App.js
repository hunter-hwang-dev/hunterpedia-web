import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Read, Write } from "./pages";

function App() {
  return (
    <div className="App">
      <header>
        <h1>여기에 네비게이션 바 추가하기</h1>
      </header>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read" element={<Read />} />
      </Routes> */}
      <footer>
        <p>여기에 푸터 추가하기</p>
      </footer>
    </div>
  );
}

export default App;
