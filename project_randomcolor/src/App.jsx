import { useState } from "react";
import "./App.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
function App() {
  const [count, setCount] = useState(0);
  const [btnColor, setBtnColor] = useState(getRandomColor());
  const [bookmarks, setBookmarks] = useState([]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setBtnColor(getRandomColor());
  };

  const handleBookmark = () => {
    if (!bookmarks.includes(btnColor)) {
      setBookmarks((prev) => [...prev, btnColor]);
    }
  };

  return (
    <>
      <div className="container">
        <h2>랜덤 팔레트 🎨</h2>
        <div className="card">
          <button
            onClick={handleClick}
            style={{ backgroundColor: btnColor, color: "#fff" }}
          >
            {btnColor}
          </button>

          <div style={{ marginTop: "1rem" }}>
            <button className="bookmark-button" onClick={handleBookmark}>
              ⭐ 북마크
            </button>
          </div>

          <p>버튼을 눌러 랜덤으로 색상을 지정하세요.</p>

          {bookmarks.length > 0 && (
            <div className="bookmarks">
              <h3>📌 북마크한 색상</h3>
              <div className="bookmark-list">
                {bookmarks.map((hex, idx) => (
                  <div
                    key={idx}
                    className="bookmark-color"
                    style={{ backgroundColor: hex }}
                    title={hex}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
