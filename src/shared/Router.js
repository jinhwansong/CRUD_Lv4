import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../redux/component/List/List"
import Header from "../redux/component/Header/Header";
import Submit from "../redux/component/Submit/Submit";
import Footer from "../redux/component/Footer/Footer";
import Correction from "../redux/component/Submit/Correction";
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/Submit" element={<Submit />} />
                <Route path="/:id" element={<Correction />} />
                
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
