import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  });

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.title}
              />
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>
                  <button>Ver Detalhes</button>
                </Link>
                <button onClick={() => removerFilme(item.id)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
