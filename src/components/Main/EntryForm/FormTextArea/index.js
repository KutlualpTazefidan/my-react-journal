import "./FormTextArea.css";

export default function FormTextArea() {
  return (
    <>
      <label htmlFor="notes" className="form-textfield-label">
        Notes
      </label>
      <textarea
        id="notes"
        name="notes"
        className="form-textfield"
        rows={6}
      ></textarea>
    </>
  );
}
