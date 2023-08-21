import { Route, Routes } from "react-router-dom";
import { Error } from "./pages/error";
import { Tetris } from "./pages/game";

function App() {
  return (
    <Routes>
      <Route path="/tetris" element={<Tetris />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
