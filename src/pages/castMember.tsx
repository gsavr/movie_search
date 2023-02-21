import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  findCastDetail,
  findMoviesByActor,
} from "../features/movies/moviesApi";
import { selectMovie } from "../features/movies/movieSearchSlice";
import profile from "../images/profile.svg";
import { MovieSmallSlider } from "../components/moviesSmallSlider";

export const CastMember: React.FC = () => {
  let { actorId } = useParams();
  const data = useAppSelector(selectMovie);
  console.log(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCastDetail(actorId));
    dispatch(findMoviesByActor(actorId));
  }, [actorId, dispatch]);

  const renderActor = () => {
    const actor = data.actor;
    console.log(actor.birthday);

    return (
      <div className="row" key={actor.id}>
        <div className="col m4 s12">
          <div>{renderImage(actor.profile_path)}</div>
        </div>
        <div
          style={{ height: "500px", overflow: "auto" }}
          className="col m8 s12"
        >
          <h4 style={{ fontStyle: "oblique" }}>{actor.name}</h4>
          <p>Birthday: {renderDate(actor.birthday)}</p>
          <p>Place of Birth: {actor.place_of_birth}</p>
          <p>
            <span>Biography: </span>
            <span>{actor.biography}</span>
          </p>
        </div>
      </div>
    );
  };

  const renderDate = (date: string) => {
    let newDate = new Date(`${date}T10:12:50`);
    return newDate.toDateString();
  };

  const renderImage = (pic: string) => {
    if (pic === null) {
      return (
        <img
          className="box-shadow"
          style={{ width: "100%", marginTop: "20px" }}
          src={profile}
          alt="img"
        />
      );
    } else {
      return (
        <img
          className="box-shadow"
          style={{ width: "100%", marginTop: "20px" }}
          src={`https://image.tmdb.org/t/p/w500${pic}`}
          alt="img"
        />
      );
    }
  };

  return (
    <div className="app">
      <div className="container">
        {renderActor()}
        <h5 style={{ fontStyle: "oblique" }}>
          Films featuring {data.actor.name}
        </h5>
        <MovieSmallSlider movies={data.moviesWithActor} />
      </div>
    </div>
  );
};
