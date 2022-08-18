import React from "react";
import Repositorios from "./components/repositorios/Repositorios";
import { useEffect } from "react"
import { useState } from "react"
import GithubUsers from "./components/githubUsers/GithubUsers";


export default function App() {
  return (
    <div>
        <h1>ESTUDOS SOBRE HOOKS </h1>
        <GithubUsers/>

    </div>
  );
}