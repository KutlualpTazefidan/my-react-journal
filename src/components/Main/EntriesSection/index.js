import "./EntriesSection.css";
import TabBar from "./TabBar";
import EntryList from "./EntryList";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <TabBar />
      <EntryList />
    </section>
  );
}
