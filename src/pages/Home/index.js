import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "5c7d098e35cc80aafdc81b2b8aafe7cd",
          language: "pt-BR",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(10));
    }
    loadFilmes();
  }, []);

if (loading) {
    return (
        <div className="loading">
            <h2>Carregando filmes...</h2>                
            </div>
      );
}

  return (
    <div>
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) => {
            return (
              <article key={filmes.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                  alt={filme.title}
                />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;