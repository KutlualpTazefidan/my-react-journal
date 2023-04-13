import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form className="form">
      <h2>NEW ENTRY</h2>
      <label htmlFor="motto">Motto</label>
      <input
        type="text"
        id="motto"
        name="motto"
        className="form-inputfield"
      ></input>
      <label htmlFor="notes">Notes</label>
      <textarea
        id="notes"
        name="notes"
        className="form-textfield"
        rows={6}
      ></textarea>
      <button className="form-submit-button">Create</button>
    </form>
  );
}
