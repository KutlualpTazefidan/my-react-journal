import "./Tab.css";

export default function Tab({ tabtext, numberOfEntries, active }) {
  let tabClassName = "tab";
  let tabTitleClassName = "tab-title";
  let tabNumberOfEntriesClassName = "tab-number-of-entries";
  if (active) tabClassName = "tab";
  if (active) tabTitleClassName = "tab-title--active";
  if (active) tabNumberOfEntriesClassName = "tab-number-of-entries--active";
  return (
    <button className={tabClassName}>
      <h2 className={tabTitleClassName}>{tabtext}</h2>
      <div className={tabNumberOfEntriesClassName}>{numberOfEntries}</div>
    </button>
  );
}
