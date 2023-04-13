import "./EntryForm.css";
import EntrySubmitButton from "./EntrySubmitButton";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

export default function EntryForm() {
  return (
    <form className="form">
      <h2>NEW ENTRY</h2>
      <FormInput />
      <FormTextArea />
      <EntrySubmitButton />
    </form>
  );
}
