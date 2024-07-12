import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  });

  function excluirFilme(id) { 
    const filmesFiltrados = filmes.filter((item) => item.id!== id);
    setFilmes(filmesFiltrados);
    localStorage.setItem("@primeflix", JSON.stringify(filmesFiltrados));
    toast.success("Filme removido da lista de favoritos!");
  }

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
              <span className="title">{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>
                  <button>Ver Detalhes</button>
                </Link>
                <button onClick={() => excluirFilme(item.id)}>Remover</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
