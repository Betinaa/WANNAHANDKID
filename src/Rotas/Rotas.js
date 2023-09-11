import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "../paginas/Error/Error";
import Perfil from "../paginas/Perfil/Perfil";
import Home from "./paginas/Home/Home";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="Perfil" element={<Perfil />} />
                <Route path="Error" element={<Error />} />

            </Routes>

        </BrowserRouter>
);
};
export default Rotas;