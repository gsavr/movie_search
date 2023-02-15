import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import noPoster from "../images/cinema.png";

interface SliderProps {
  movies: [];
}

export const MovieSlider: React.FC<SliderProps> = (props) => {
  const { movies } = props;

  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const renderImage = (poster: string) => {
    if (poster === null) {
      return (
        <img
          style={{ width: "90%" }}
          className="box-movie"
          src={noPoster}
          alt="img"
        />
      );
    } else {
      return (
        <img
          style={{ width: "90%" }}
          className="box-movie"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="img"
        />
      );
    }
  };

  const renderSlides = () => {
    return movies.map((movie: any) => {
      return movie.poster_path ? (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {renderImage(movie.poster_path)}
          </Link>
        </div>
      ) : null;
    });
  };

  return (
    <>
      <Slider
        dots
        arrows
        infinite
        speed={200}
        slidesToShow={4}
        slidesToScroll={4}
        swipeToSlide
        {...settings}
      >
        {renderSlides()}
      </Slider>
    </>
  );
};
