import { Routes, Route } from "react-router-dom";
import "../css/App.css";
import { Header } from "../components/header";
import { Home } from "../pages/home";
import { MovieDetail } from "../pages/movieDetail";
import { CastMember } from "../pages/castMember";
//import { StickyMenu } from "./stickyMenu";
import { Footer } from "./footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/cast/:actorId" element={<CastMember />} />
      </Routes>
      {/* <StickyMenu /> */}
      <Footer />
    </div>
  );
};
