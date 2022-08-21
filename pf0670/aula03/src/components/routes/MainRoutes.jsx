import React from 'react'
import { Routes, Route } from "react-router-dom";
import Alunos from '../alunos/Alunos';
import GithubUsers from '../githubUsers/GithubUsers';
import Repositorios from '../respositorios/Repositorios';
import Home from '../home/Home';
import ShowRepos from '../showRepos/ShowRepos';

export default function MainRoutes() {
    return (
        <>
            <h2>ROTAS</h2>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/repo" element={<ShowRepos />} />
            </Routes>
        </>
    )
}
