//import SimularMovies from './SimularMovies';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  findMovieCast,
  findMovieDetail,
  findRecommendedMovies,
  selectMovie,
} from "../features/movies/movieSearchSlice";
import { CastSlider } from "../components/castSlider";
import { MovieSmallSlider } from "../components/moviesSmallSlider";
import noPoster from "../images/cinema.png";

export const MovieDetail: React.FC = () => {
  let { movieId } = useParams();
  const data = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findMovieDetail(movieId));
    dispatch(findMovieCast(movieId));
    dispatch(findRecommendedMovies(movieId));
  }, [movieId, dispatch]);

  const renderImage = (poster: string) => {
    if (poster === null) {
      return (
        <img
          className="box-shadow"
          style={{ width: "100%", marginTop: "20px" }}
          src={noPoster}
          alt="img"
        />
      );
    } else {
      return (
        <img
          className="box-shadow"
          style={{ width: "100%", marginTop: "20px" }}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="img"
        />
      );
    }
  };

  const renderMovie = () => {
    const movie = data.movie;
    return (
      <div className="row" key={movie.id}>
        <div className="col m4 s12">{renderImage(movie.poster_path)}</div>
        <div className="col m8 s12">
          <h4 style={{ fontStyle: "oblique" }}>{movie.original_title}</h4>
          <p>Score: {renderScore(movie.vote_average)}%</p>
          <p>{movie.overview}</p>
          <p>Runtime: {movie.runtime} min</p>
          <p>Released on: {renderDate(movie.release_date)}</p>
          <p>Genres: {renderListOfGenres(movie.genres)}</p>
          <a
            style={{ color: "white", textDecoration: "underline" }}
            href={movie.homepage}
            target="_blank"
            rel="noreferrer"
          >
            Link to Homepage
          </a>
        </div>
      </div>
    );
  };

  const renderDate = (date: string) => {
    let newDate = new Date(date);
    return newDate.toDateString();
  };

  const renderScore = (vote: number) => {
    return Math.round(vote * 10);
  };

  const renderListOfGenres = (genres: [{ name: string }]) => {
    if (genres) {
      const array: any = [];
      genres.map((genre) => {
        return array.push(genre.name + " ");
      });
      return array;
    }
  };

  return (
    <>
      <div className="container">
        {renderMovie()}
        <div>
          <h5 style={{ fontStyle: "oblique" }}>Cast:</h5>
        </div>
        <CastSlider cast={data.cast} />
        <div>
          <h5 style={{ fontStyle: "oblique", marginTop: "30px" }}>
            If you like this movie you may also like:
          </h5>
          <MovieSmallSlider movies={data.recommendations} />
        </div>
      </div>
    </>
  );
};
