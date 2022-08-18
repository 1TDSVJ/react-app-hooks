import React, { useState, useEffect } from 'react'

export default function GithubUsers() {
  const [newUsers, setnewUsers] = useState([])

  useEffect(() => {
    carregaUsers()
  }, [])

  const carregaUsers = async () => {
    const resp = await fetch("https://api.github.com/users")
    const data = await resp.json()
    setnewUsers(data)
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul style={{ listStyle: 'none' }}>
        {newUsers.map((user, i) =>
          <li key={user.id}>
            <figure>
              <img src={user.avatar_url} alt="usuário do github id`${user.id}`" title={user.login} style={{ width: '12.5rem' }} />
              <figcaption><a href={user.html_url}>{user.login}</a></figcaption>
            </figure>
          </li>
        )}
      </ul>
    </div>
  )
}