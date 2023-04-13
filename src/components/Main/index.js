import EntriesSection from "./EntriesSection";
import EntryForm from "./EntryForm";

import "./Main.css";
export default function Main() {
  return (
    <main className="main">
      <EntryForm />
      <EntriesSection />
    </main>
  );
}
