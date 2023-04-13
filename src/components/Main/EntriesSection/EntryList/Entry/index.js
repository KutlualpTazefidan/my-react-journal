import "./Entry.css";
import FavoriteIcon from "./FavoriteIcon";
export default function Entry() {
  const dateOptions = { weekday: "short", year: "numeric", day: "numeric" };
  const entryDates = new Date().toLocaleDateString("en-GB", dateOptions);
  return (
    <section className="entry">
      <div className="entry-date">{entryDates}</div>
      <h2 className="entry-title">"That's life in the city"</h2>
      <p className="entry-text">
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit docere sic omne animal,
        simul atque.
      </p>
      <FavoriteIcon />
    </section>
  );
}
