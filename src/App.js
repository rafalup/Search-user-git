import { useState } from 'react';
import "./App.css"

export default function App() {

  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${search}`) 
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    <div className="container">
      <h1>Busca </h1>
      <div className='grid-search'>
        <div>
          <input  onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <button onClick={fetchUser}>Enter</button>
        </div>
      </div>
      <article>
       
        {user && (
          <div className="user_encontrado">
            <h4>usuario encontrado:</h4>
            <img width={200} src={user.avatar_url} alt="avatar"/>
            <h4>{user.longin}</h4>
            <p>{user.bio}</p>
          </div>
        )}
      </article>
    </div>
  );
}
