import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <div className="tv-container">
        <div className="static "></div>
        <div className="overlay">
          <div className="error-text">404</div>
          <div className="subtext">Lost in the Game Universe!</div>
          <div className="instructions">
            The page you’re looking for has vanished into the void. Lets get
            your{" "}
            <button
              onClick={() => navigate(-1)}
              className=" text-color-darkred2 outline hover:text-color-light hover:bg-red-800 hover:outline-none transition-all duration-300"
            >
              back
            </button>{" "}
            on track!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
