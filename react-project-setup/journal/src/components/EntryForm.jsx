import Button from "./Button";

export default function EntryForm() {
  return (
    <form action="">
      <h2 className="entry-form">NEW ENTRY</h2>

      <label htmlFor="entry-form__motto">Motto</label>
      <input
        type="text"
        id="entry-form__motto"
        name="motto"
        placeholder="..."
      ></input>

      <label htmlFor="entry-form__notes">Notes</label>
      <textarea
        id="entry-form__notes"
        name="notes"
        placeholder="..."
      ></textarea>

      <Button />
    </form>
  );
}
