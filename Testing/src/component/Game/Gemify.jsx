import { useEffect, useState } from "react";
import "./style.css";

const Gemify = ({ searchTerm, selectedPlatform }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null);
  const [minRating, setMinRating] = useState(0);
  const [releaseYear, setReleaseYear] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("All");

  const API_KEY = import.meta.env.VITE_APIKEY;
  const initialUrl = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2023-12-31&ordering=-added`;

  const getPlatformStr = (platforms) => {
    const platformStr = platforms.map((pl) => pl.platform.name).join(", ");
    return platformStr.length > 30 ? platformStr.substring(0, 30) + "..." : platformStr;
  };

  const loadGames = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setGames((prevGames) => [...prevGames, ...data.results]);
      setNextUrl(data.next || null);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames(initialUrl);
  }, []);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = game.rating >= minRating;
    const matchesYear = releaseYear === "All" || game.released?.startsWith(releaseYear);
    const matchesLetter = selectedLetter === "All" || game.name[0].toUpperCase() === selectedLetter;

    const matchesPlatform =
      selectedPlatform === "All" ||
      (game.parent_platforms &&
        game.parent_platforms.some((p) =>
          p.platform.name.toLowerCase().includes(selectedPlatform.toLowerCase())
        ));

    return matchesSearch && matchesRating && matchesYear && matchesLetter && matchesPlatform;
  });

  const loadButtonStyle = {
    backgroundColor: "var(--accent-color)",
    border: "none",
    padding: "12px 24px",
    color: "var(--text-dark)",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(102, 178, 255, 0.3)",
  };

  return (
    <>
      {!loading ? null : (
        <div id="js-preloader" className="js-preloader">
          <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 mb-4">
            <div
              className="p-3 sticky-top"
              style={{
                height: "100vh",
                overflowY: "auto",
                top: "0",
                backgroundColor: "var(--primary-dark)",
                color: "var(--text-light)",
              }}
            >
              <h5 className="mb-3">Filters</h5>

              <label className="form-label">Minimum Rating</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="form-range"
              />
              <div className="text-end mb-3">{minRating} ⭐</div>

              <label className="form-label">Release Year</label>
              <select
                className="form-select mb-3"
                value={releaseYear}
                onChange={(e) => setReleaseYear(e.target.value)}
                style={{ backgroundColor: "var(--background-dark)", color: "var(--text-light)" }}
              >
                <option value="All">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>

              <label className="form-label">Filter by Title</label>
              <div className="d-flex flex-wrap">
                {["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
                  <button
                    key={letter}
                    className={`btn btn-sm m-1 ${
                      selectedLetter === letter ? "btn-primary" : "btn-outline-light"
                    }`}
                    onClick={() => setSelectedLetter(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-10 col-md-9">
            <div className="most-popular">
              <div className="heading-section text-end pe-4">
                <h4 className="text-uppercase fw-bold" style={{ color: "var(--accent-color)" }}>
                  EXPLORE PLAY CONQUER
                </h4>
                <p className="text-center text-muted">
                  Discover the ultimate gaming experience
                </p>
              </div>

              <div className="row gameList">
                {filteredGames.map((game) => (
                  <div key={game.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <div
                      className="item"
                      style={{
                        backgroundColor: "var(--primary-dark)",
                        color: "var(--text-light)",
                        border: "1px solid var(--accent-color)",
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <img src={game.background_image} alt={game.name} className="img-fluid" />
                      <h4 className="game-name p-2">
                        {game.name}
                        <br />
                        <span className="platforms" style={{ color: "var(--accent-color)" }}>
                          {getPlatformStr(game.parent_platforms)}
                        </span>
                      </h4>
                      <ul className="d-flex justify-content-around pb-2">
                        <li>
                          <i className="fa fa-star"></i>{" "}
                          <span className="rating">{game.rating}</span>
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar"></i>{" "}
                          <span className="date">{game.released}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {nextUrl && (
                <div className="text-center mt-4 mb-5">
                  <button style={loadButtonStyle} onClick={() => loadGames(nextUrl)}>
                    Load More Games
                  </button>
                </div>
              )}

              {!nextUrl && !loading && games.length > 0 && (
                <div className="col-lg-12 text-center mt-4">
                  <p>All games loaded 🎮</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gemify;
