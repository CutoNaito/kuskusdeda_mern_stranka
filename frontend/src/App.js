import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
