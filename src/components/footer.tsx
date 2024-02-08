import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gs_logo from "../images/gs_logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252c38] text-white sticky top-[100vh] mt-10">
      <div className="container relative mx-auto px-5 pb-10 pt-0">
        {/*  Flex container for all items  */}
        <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0">
          <div className="mt-20">
            <div className="flex  space-x-3 md:-mt-6">
              <div>&copy; 2024, Giorgio Savron Development</div>
            </div>
          </div>
          {/*  Social  */}
          <div className="!mt-10 flex items-center space-x-8 pb-0">
            <div>
              <a
                href="https://www.giorgiosavron.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={gs_logo}
                  alt="GS_logo"
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/giorgio-savron/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/gsavr/movie_search"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="ficon h-[30px] w-[30px]  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
