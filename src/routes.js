import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Maior from "./components/maior";
import Menor from "./components/menor";
import Escolha from "./components/escolha";

const Router = () => (
    <Routes>
        <Route path="/" element={<Escolha />}/>
        <Route path="menor" element={<Menor />} />
        <Route path="maior" element={<Maior />} />
    </Routes>
);

export default Router;