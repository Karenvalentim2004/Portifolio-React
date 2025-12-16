import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import Projetos from "./pages/projetos/Index";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
