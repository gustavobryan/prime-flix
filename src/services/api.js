import axios from "axios";

// key API 5c7d098e35cc80aafdc81b2b8aafe7cd

// https://www.themoviedb.org/3/movie/now_playing?api_key=5c7d098e35cc80aafdc81b2b8aa&language=pt-BR

// token API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzdkMDk4ZTM1Y2M4MGFhZmRjODFiMmI4YWFmZTdjZCIsIm5iZiI6MTcxOTMzNDQwOC43ODI3ODYsInN1YiI6IjY2N2FmMzhiN2U1N2VjMDdlZTU2ODFjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mF5jmzIOjPlvy38ZDEPXnsN8uNiBk05kPrzR5JvSJY

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
