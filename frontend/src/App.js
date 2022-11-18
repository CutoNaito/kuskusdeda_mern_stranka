import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/" element={<Menu />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
