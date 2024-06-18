import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
