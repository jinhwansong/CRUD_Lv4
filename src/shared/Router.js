import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../redux/component/List/List"
import Header from "../redux/component/Header/Header";
import Submit from "../redux/component/Submit/Submit";
import Footer from "../redux/component/Footer/Footer";
import Correction from "../redux/component/Submit/Correction";
import Detail from "../redux/component/Detail/Detail";
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/submit" element={<Submit />} />
                {/* 수정페이지 */}
                <Route path="/:id/correction" element={<Correction />} /> 
                <Route path="/:id" element={<Detail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
