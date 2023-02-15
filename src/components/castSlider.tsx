import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useGenProfilePic } from "../hooks/useGenProfilePic";
import profile from "../images/no-pic/profile-10.png";

interface SliderProps {
  cast: [
    {
      id: number;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }
  ];
}

export const CastSlider: React.FC<SliderProps> = (props) => {
  const { cast } = props;
  const profilePic = useGenProfilePic();

  const renderCast = () => {
    return cast.map((cast) => {
      return (
        <div key={cast.id} className="box-cast">
          <Link to={`/cast/${cast.id}`}>{renderImage(cast.profile_path)}</Link>
          <Link
            to={`/cast/${cast.id}`}
            style={{ color: "white", textAlign: "center" }}
          >
            {cast.name} as '{cast.character}'
          </Link>
        </div>
      );
    });
  };

  const renderImage = (poster: string) => {
    if (!poster) {
      return (
        <img style={{ width: "100%" }} src={profilePic || profile} alt="img" />
      );
    } else {
      return (
        <img
          style={{ width: "100%" }}
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="img"
        />
      );
    }
  };

  const settings = {
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider
        dots
        arrows
        infinite
        speed={200}
        slidesToShow={7}
        slidesToScroll={7}
        swipeToSlide
        {...settings}
      >
        {renderCast()}
      </Slider>
    </div>
  );
};
