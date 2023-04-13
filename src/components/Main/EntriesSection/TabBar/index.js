import Tab from "./Tab";
import "./TabBar.css";

export default function TabBar() {
  return (
    <nav className="navigation">
      <Tab tabtext="All Entries" numberOfEntries={3} active />
      <Tab tabtext="Favorites" numberOfEntries={1} />
    </nav>
  );
}
