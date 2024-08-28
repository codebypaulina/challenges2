import "./Form.css";

export default function Form({ onCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();

    // task 1, step 1: Extend the `handleSubmit` function to set the
    // `name` and `email` state to its corresponding form field values.
    const form = event.target;

    // task 2: Refactor the `handleSubmit` function so that it calls `onCreateUser`
    // with the correct values of the form fields as arguments.
    onCreateUser(form.elements.name.value, form.elements.email.value);

    // task 1, step 2: Reset the form after submit.
    form.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="Your name" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="Your email" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
