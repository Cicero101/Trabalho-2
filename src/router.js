import Login from "./pages/login";
import Cliente from "./pages/cliente";
import Usuario from "./pages/usuario";
import Produto from "./pages/produto";

import Menu from "./componentes/menu";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/produto" element={<Produto />} />
            </Routes>
        </BrowserRouter>
    
    );
}

export default Router;