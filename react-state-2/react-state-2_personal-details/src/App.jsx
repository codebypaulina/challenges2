import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";

export default function App() {
  // task 2: Lift both states up to the `App` component.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // task 2: Write a `handleCreateUser` function which receives the two parameters `name` and `email`
  // and uses them to set both state variables.
  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }

  // task 2: Pass `handleCreateUser` to the `Form` component:
  //         - Hint: `onDelete={handleDelete}`
  //         - Make sure to receive the prop inside of the `Form` component.
  // task 2: Go back to the `App` component and display both states
  //         in the respective output fields below the `Form` component.
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
