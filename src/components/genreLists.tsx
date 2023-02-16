import { MovieSlider } from "../components/movieslider";
import { movieGenres } from "../components/genres";
import { Link } from "react-scroll";

interface GenreListsProps {
  data: any;
}

export const GenreLists: React.FC<GenreListsProps> = (props) => {
  const { data } = props;

  const renderGenreButtons = () => {
    return movieGenres.map((type) => {
      return (
        <Link
          to={type.link}
          duration={800}
          smooth={true}
          target=""
          rel=""
          key={type.code}
        >
          <button
            className="btn blue-grey lighten-2 flow-text"
            style={{ color: "black", fontSize: ".8rem", margin: "2px" }}
          >
            {type.name}
          </button>{" "}
        </Link>
      );
    });
  };

  const renderGenreLists = () => {
    // eslint-disable-next-line array-callback-return
    return movieGenres.map((type) => {
      switch (type.code) {
        case 28:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesAction} />
            </div>
          );
        case 16:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesAnimation} />
            </div>
          );
        case 35:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesComedy} />
            </div>
          );
        case 18:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesDrama} />
            </div>
          );
        case 14:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesFantasy} />
            </div>
          );
        case 27:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesHorror} />
            </div>
          );

        case 10749:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesRomance} />
            </div>
          );
        case 878:
          return (
            <div key={type.code}>
              <h6 id={type.link}>{type.name}</h6>
              <MovieSlider movies={data.moviesSciFi} />
            </div>
          );
        default:
          break;
      }
    });
  };
  return (
    <>
      <div className="row center">{renderGenreButtons()}</div>
      <div>{renderGenreLists()}</div>
    </>
  );
};
