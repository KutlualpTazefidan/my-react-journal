import "./FormInput.css";
export default function FormInput() {
  return (
    <>
      <label htmlFor="motto" className="form-inputfield-label">
        Motto
      </label>
      <input
        type="text"
        id="motto"
        name="motto"
        className="form-inputfield"
      ></input>
    </>
  );
}
