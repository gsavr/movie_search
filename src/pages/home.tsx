//import { Link } from "react-router-dom";
import { MovieSlider } from "../components/slider";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  findNowPlaying,
  findMoviesByGenre,
} from "../features/movies/moviesApi";
import { selectMovie } from "../features/movies/movieSearchSlice";
import { useEffect, useState } from "react";
import { movieGenres } from "../components/genres";
//import noPoster from "../images/cinema.png";
//const M = require("materialize-css/dist/js/materialize.min.js");

export const Home: React.FC = () => {
  const [movie, setMovie] = useState("");
  const [genre, setGenre] = useState({ name: "Science Fiction", code: 878 });
  const data = useAppSelector(selectMovie);
  console.log(data);
  const dispatch = useAppDispatch();

  const year = new Date().getFullYear();

  useEffect(() => {
    dispatch(findNowPlaying());
    dispatch(findMoviesByGenre(genre));
  }, [dispatch, genre]);

  const handleType = (event: { target: { value: any } }) => {
    setMovie(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // this.props.getMovies(movie);
  };

  /*   const renderPoster = (movie: null) => {
    if (movie === null) {
      return <img src={noPoster} alt="img" />;
    } else {
      return <img src={`https://image.tmdb.org/t/p/w500${movie}`} alt="img" />;
    }
  }; */

  const renderGenres = () => {
    return movieGenres.map((type) => {
      return (
        <button
          className="btn blue-grey lighten-2"
          style={{ color: "black" }}
          key={type.code}
          onClick={(e) => setGenre(type)}
        >
          {type.name}
        </button>
      );
    });
  };

  //   const renderListMovies = () => {
  //     if (data) {
  //       return data.map((movie: any) => {
  //         return (
  //           <Link
  //             className="col m2 movie-img"
  //             to={`/movie/${movie.id}`}
  //             key={movie.id}
  //           >
  //             {renderPoster(movie.poster_path)}
  //           </Link>
  //         );
  //       });
  //     }
  //   };

  return (
    <>
      <div>
        <div className="card-category">
          <form>
            <div className="row">
              <div className="col m12 s12">
                <div className="box-search">
                  <div className="input-field col s6">
                    <input
                      onChange={(e) => handleType(e)}
                      value={movie}
                      id="movie"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="movie" className="search-text">
                      Search for a Movie
                    </label>
                  </div>
                  <button
                    onClick={onSubmit}
                    className="waves-effect waves-light btn blue-grey lighten-2"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container">
          <div style={{ padding: "20px 0px" }} className="row center">
            {/*   {renderListMovies()} */}
          </div>
          {data.status !== "loading" ? (
            <div className="row">
              <h6>In Theaters Now:</h6>
              <MovieSlider movies={data.moviesNowPlaying} />
              <br></br>
              <div className="row">{renderGenres()}</div>
              <h6>
                The Best {genre.name} for {year}
              </h6>
              <MovieSlider movies={data.moviesByGenre} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

/* function mapStateToProps(state) {
  return {
    auth: state.auth.authenticated,
    movies: state.movies.movies.results
  }; */
