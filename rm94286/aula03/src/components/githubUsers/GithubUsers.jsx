import React, {useState, useEffect} from 'react'

export default function GithubUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const resp = await fetch("https://api.github.com/users");
        const data = await resp.json();

        setUsers(data);
    }
    return (
    <div>
        <h2>Lista de Usuários do Github</h2>
        <ul style={{listStyle: "none"}}>
            {users.map((user, i) => 
            <li key={i}>
                <figure>
                    <img src={user.avatar_url} alt="avatar" title={user.login} style={{width: '200px'}}/>
                    <figcaption><a href={user.html_url}>{user.login}</a></figcaption>
                </figure>
            </li>
            )}
        </ul>
    </div>
  )
}
