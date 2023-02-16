import { findMoviesByGenre } from "../features/movies/moviesApi";
import { MovieSlider } from "../components/movieslider";
import { movieGenres } from "../components/genres";

interface GenreListsProps {
  data: any;
  genre: { name: string; code: number; link: string };
  setGenre: any;
  dispatch: any;
}

export const GenreLists: React.FC<GenreListsProps> = (props) => {
  const { data, genre, setGenre, dispatch } = props;

  console.log(genre);

  const renderGenreButtons = () => {
    return movieGenres.map((genre) => {
      return (
        <button
          className="btn blue-grey lighten-2 flow-text"
          style={{ color: "black", fontSize: ".8rem", margin: "2px" }}
          onClick={() => onClick(genre)}
          key={genre.code}
        >
          {genre.name}
        </button>
      );
    });
  };

  const onClick = (genre: { name: string; code: number; link: string }) => {
    setGenre(genre);
    dispatch(findMoviesByGenre(genre));
  };

  const renderGenreLists = (genre: {
    name: string;
    code: number;
    link: string;
  }) => {
    switch (genre.code) {
      case 28:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesAction} />
          </div>
        );
      case 16:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesAnimation} />
          </div>
        );
      case 35:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesComedy} />
          </div>
        );
      case 18:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesDrama} />
          </div>
        );
      case 14:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesFantasy} />
          </div>
        );
      case 27:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesHorror} />
          </div>
        );

      case 10749:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesRomance} />
          </div>
        );
      case 878:
        return (
          <div key={genre.code}>
            <h6 id={genre.link}>{genre.name}</h6>
            <MovieSlider movies={data.moviesSciFi} />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <>
      <div className="row center">
        {renderGenreButtons()}
        {genre.name !== "" && (
          <button
            className="btn blue-grey lighten-2 flow-text"
            style={{ color: "black", fontSize: ".8rem", margin: "2px" }}
            onClick={() => setGenre({ name: "", code: 0, link: "" })}
          >
            dismiss {genre.name}
          </button>
        )}
      </div>
      <div>{renderGenreLists(genre)}</div>
    </>
  );
};
