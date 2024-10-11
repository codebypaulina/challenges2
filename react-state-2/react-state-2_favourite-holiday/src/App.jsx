import "./App.css";
import { useState } from "react";

export default function App() {
  // Create a separate state for `holiday` and `date`.
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // The `handleSubmit` function sets both states with its corresponding values.
    // Do you remember how to access the values of the target fields?
    const form = event.target;

    setHoliday(form.elements.holiday.value);
    setDate(form.elements.date.value);

    // When submitting the form, the form fields should be reset and the `holiday` field should be focussed.
    form.reset();
    form.elements.holiday.focus;
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
