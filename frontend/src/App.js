import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Kupony from "./pages/admin/Kupony";

function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/kupony" element={<Kupony />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
