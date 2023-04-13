import "./FavoriteIcon.css";

export default function FavoriteIcon({ active }) {
  let imageSource = "/star.svg";
  if (active) imageSource = "/star-filled.svg";
  return (
    <button className="favorite-button">
      <img src={imageSource} alt="favorite" />
    </button>
  );
}
