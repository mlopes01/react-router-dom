"use client"

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LogonCreate from "./router/LogonCreate";
import Login from "./router/Login";
import DashBoard from "./router/DashBoard";
import Profile from "./router/Profile";
import RecoverPassword from "./router/RecoverPassword";
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashBoard />}></Route>
                <Route path="/cadastro" element={<LogonCreate />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/perfil" element={<Profile />}></Route>
                <Route path="/recuperarSenha" element={<RecoverPassword />}></Route>
            </Routes>
        </BrowserRouter>
    )
}