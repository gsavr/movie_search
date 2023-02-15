import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  findNowPlaying,
  findTrendingMovies,
  findMoviesBySearch,
  findMoviesByGenre,
} from "../features/movies/moviesApi";
import { selectMovie, clearSearch } from "../features/movies/movieSearchSlice";
import { MovieSlider } from "../components/movieslider";
import { MovieSmallSlider } from "../components/moviesSmallSlider";
import { GenreLists } from "../components/genreLists";
import { movieGenres } from "../components/genres";

export const Home: React.FC = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const data = useAppSelector(selectMovie);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findNowPlaying());
    dispatch(findTrendingMovies());
    dispatch(findMoviesByGenre(movieGenres[0]));
    dispatch(findMoviesByGenre(movieGenres[1]));
    dispatch(findMoviesByGenre(movieGenres[2]));
    dispatch(findMoviesByGenre(movieGenres[3]));
    dispatch(findMoviesByGenre(movieGenres[4]));
    dispatch(findMoviesByGenre(movieGenres[5]));
    dispatch(findMoviesByGenre(movieGenres[6]));
    dispatch(findMoviesByGenre(movieGenres[7]));
  }, [dispatch]);

  const onSearchTyping = (event: { target: { value: string } }) => {
    setMovieSearch(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(findMoviesBySearch(movieSearch));
    setMovieSearch("");
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
              <div>
                <GenreLists data={data} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
