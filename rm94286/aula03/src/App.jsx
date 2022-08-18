import React from 'react';
import GithubUsers from './components/githubUsers/GithubUsers';
import Repositorios from './components/repositorios/Repositorios';

export default function App() {
  return (
    <>
      <h1>Estudos sobre HOOKS</h1>
      <Repositorios />
      <GithubUsers />
    </>
  );
}
