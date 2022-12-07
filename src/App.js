import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Formulario from "./pages/Socio";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Stadium from "./pages/Stadium";
import Inf from "./pages/Inferiores";
import Tdc from "./News/Gracias";
import Pibe from "./News/Paredes";
import Fel from "./pages/Felicidades";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/socios" element={<Formulario />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Stadium" element={<Stadium />} />
        <Route path="/News" element={<News />} />
        <Route path="/inf" element={<Inf />} />
        <Route path="/tdc" element={<Tdc />} />
        <Route path="/pibe" element={<Pibe />} />
        <Route path="/ref" element={<Fel />} />
      </Routes>
    </BrowserRouter>
  );
}
