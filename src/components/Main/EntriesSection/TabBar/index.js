import "./TabBar.css";

export default function TabBar() {
  return (
    <nav className="navigation">
      <button className="entry-tab">
        <h2>All Entries</h2>
        <div className="entry-tab-number-of-entries">3</div>
      </button>
      <button className="favorite-tab">
        <h2>Favorites</h2>
        <div className="favorite-tab-number-of-entries">1</div>
      </button>
    </nav>
  );
}
