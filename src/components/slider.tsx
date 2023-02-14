import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
          slidesToScroll: 3,
          initialSlide: 3,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  const renderSlides = () => {
    return movies.map((movie: any) => {
      return (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              style={{ width: "90%" }}
              className="box-movie"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="img"
            />
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
