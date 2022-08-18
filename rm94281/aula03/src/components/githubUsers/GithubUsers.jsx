import React, { useEffect, useState } from 'react';

export default function GithubUsers() {
  const [users, setUsers] = useState([]);

  const carregaUsers = async () => {
    const resp = await fetch('https://api.github.com/users');
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    carregaUsers();
  }, []);

  return (
    <>
      <h2>Lista de Usuários</h2>
      <ul style={{ listStyle: 'none' }}>
        {users.map((user) => (
          <li key={user.id}>
            <figure>
              <img src={user.avatar_url} alt='avatar' style={{ width: '200px' }} title={user.login}/>
            <figcaption><a href={user.html_url}>{user.login}</a></figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
