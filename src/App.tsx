import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./pages/error";
import { Tetris } from "./pages/game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tetris />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
