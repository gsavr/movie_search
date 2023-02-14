import { Routes, Route } from "react-router-dom";
import "../css/App.css";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { MovieDetail } from "../pages/movieDetail";
import { CastMember } from "../pages/castMember";

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/cast/:actorId" element={<CastMember />} />
      </Routes>
    </div>
  );
};
