import Button from "./Button";

export default function EntryForm() {
  return (
    <form action="">
      <h2 className="entry-form">NEW ENTRY</h2>

      <label htmlFor="entry-form__motto">Motto</label>
      <input id="entry-form__motto" type="text" placeholder="..."></input>

      <label htmlFor="entry-form__notes">Notes</label>
      <textarea
        id="entry-form__notes"
        name="entry-form__notes"
        placeholder="..."
      ></textarea>

      <Button />
    </form>
  );
}
