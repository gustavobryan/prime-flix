import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";
function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilmes() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "5c7d098e35cc80aafdc81b2b8aafe7cd",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilmes();

    return () => {
      console.log("componente desmontado");
    };
  }, [navigate, id]);



  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id )

    if (hasFilme) {
      alert(" esse filme esta na lista");
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

    alert("Filme adicionado à lista");
  }

  if (loading) {
    return <div className="filme-info">Carregando detalhes...</div>;
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https:youtube.com.br/results?search_query=${filme.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
