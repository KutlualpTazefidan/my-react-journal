import "./FavoriteIcon.css";
import { useState } from "react";
export default function FavoriteIcon() {
  // let imageSource = "/star.svg";
  // if (active) imageSource = "/star-filled.svg";
  function activateFavoriteStart() {
    changeStatus(!active);
    active
      ? changeImageSource("/star-filled.svg")
      : changeImageSource("/star.svg");
  }
  const [imageSource, changeImageSource] = useState("/star.svg");
  const [active, changeStatus] = useState(true);
  return (
    <button onClick={activateFavoriteStart} className="favorite-button">
      <img src={imageSource} alt="favorite" />
    </button>
  );
}
