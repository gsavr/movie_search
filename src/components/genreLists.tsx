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
        <Link to={type.link} duration={800} smooth={true} target="" rel="">
          <button
            className="btn blue-grey lighten-2 flow-text"
            style={{ color: "black", fontSize: ".8rem", margin: "2px" }}
            key={type.code}
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
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesAction} />
            </>
          );
        case 16:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesAnimation} />
            </>
          );
        case 35:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesComedy} />
            </>
          );
        case 18:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesDrama} />
            </>
          );
        case 14:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesFantasy} />
            </>
          );
        case 27:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesHorror} />
            </>
          );

        case 10749:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesRomance} />
            </>
          );
        case 878:
          return (
            <>
              <h6 id={type.link}>{type.name} to watch</h6>
              <MovieSlider movies={data.moviesSciFi} />
            </>
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
