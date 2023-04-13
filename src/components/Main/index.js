import "./Main.css";
export default function Main() {
  return (
    <main className="main">
      <form className="main-form">
        <h2>NEW ENTRY</h2>
        <label htmlFor="motto">Motto</label>
        <input
          type="text"
          id="motto"
          name="motto"
          className="main-form-inputfield"
        ></input>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          className="main-form-textfield"
          rows={6}
        ></textarea>
        <button className="main-submit-button">Create</button>
      </form>
    </main>
  );
}
