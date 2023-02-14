import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import noPoster from "../images/cinema.png";

interface SliderProps {
  movies: [];
}

export const MovieSmallSlider: React.FC<SliderProps> = (props) => {
  const { movies } = props;

  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      return (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            {renderImage(movie.poster_path)}
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      <Slider
        dots
        arrows
        infinite
        speed={900}
        slidesToShow={8}
        slidesToScroll={8}
        swipeToSlide
        {...settings}
      >
        {renderSlides()}
      </Slider>
    </>
  );
};
