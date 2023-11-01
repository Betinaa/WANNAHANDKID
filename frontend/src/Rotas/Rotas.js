import { BrowserRouter, Route, Routes } from "react-router-dom"
import ModalPerfil from "../components/ModalPerfil/ModalPerfil";
import Error from "../paginas/Error/Error";
import Favoritos from "../paginas/Favoritos/Favoritos";
import Home from "../paginas/Home/Home";
import Reproducao from "../paginas/Reproducao/Reproducao";
import Videos from "../paginas/Videos/Videos";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/perfil" element={<ModalPerfil />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/reproducao" element={<Reproducao />} />
                <Route path="/error" element={<Error />} />
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>

        </BrowserRouter>
);
};
export default Rotas;