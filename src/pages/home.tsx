import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  findNowPlaying,
  findTrendingMovies,
  findMoviesByGenre,
  findMoviesBySearch,
} from "../features/movies/moviesApi";
import { selectMovie, clearSearch } from "../features/movies/movieSearchSlice";
import { MovieSlider } from "../components/movieslider";
import { MovieSmallSlider } from "../components/moviesSmallSlider";
import { movieGenres } from "../components/genres";
//const M = require("materialize-css/dist/js/materialize.min.js");

export const Home: React.FC = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [genre, setGenre] = useState({ name: "Science Fiction", code: 878 });
  const data = useAppSelector(selectMovie);
  console.log(data);
  const dispatch = useAppDispatch();

  const year = new Date().getFullYear();

  useEffect(() => {
    dispatch(findNowPlaying());
    dispatch(findTrendingMovies());
    dispatch(findMoviesByGenre(genre));
  }, [dispatch, genre]);

  const onSearchTyping = (event: { target: { value: string } }) => {
    setMovieSearch(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(findMoviesBySearch(movieSearch));
    setMovieSearch("");
  };

  const renderGenres = () => {
    return movieGenres.map((type) => {
      return (
        <button
          className="btn blue-grey lighten-2 flow-text"
          style={{ color: "black", fontSize: ".8rem", margin: "2px" }}
          key={type.code}
          onClick={(e) => setGenre(type)}
        >
          {type.name}
        </button>
      );
    });
  };

  return (
    <>
      <div className="app">
        <div className="card-category">
          <form>
            <div className="row">
              <div className="col m12 s12">
                <div className="box-search">
                  <div className="input-field col s6">
                    <input
                      onChange={(e) => onSearchTyping(e)}
                      value={movieSearch}
                      id="movie"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="movie" className="search-text">
                      Search for a Movie
                    </label>
                  </div>
                  <button
                    onClick={(e) => onSubmit(e)}
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
          <div style={{ padding: "20px 0px" }} className="row ">
            {data.moviesSearch.length ? (
              <>
                <h6 style={{ fontStyle: "italic" }}>Search Results:</h6>
                <MovieSmallSlider movies={data.moviesSearch} />
                <button
                  className="btn blue-grey lighten-2"
                  style={{
                    color: "black",
                    zIndex: "99999",
                    position: "relative",
                  }}
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => dispatch(clearSearch([]))}
                >
                  Clear
                </button>
              </>
            ) : (
              ""
            )}
          </div>
          {data.status !== "loading" ? (
            <div className="row">
              <h6>In Theaters Now:</h6>
              <MovieSlider movies={data.moviesNowPlaying} />
              <br></br>
              <h6>Trending this week:</h6>
              <MovieSlider movies={data.moviesTrending} />
              <br></br>
              <br />
              <br />
              <div className="row center">{renderGenres()}</div>
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
