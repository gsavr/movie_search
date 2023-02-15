import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper bg-[#252c38] bg-opacity-50">
          <Link className="brand-logo row" to="/">
            <i className="large material-icons nav-icon">local_movies</i>
            <div
              className="left"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Movie Finder
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
