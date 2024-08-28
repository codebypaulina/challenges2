import "./App.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("Secret message incoming...");

  if (!showMessage) {
    return (
      <div className="container">
        <h1>
          Message is hidden{" "}
          <span role="img" aria-label="scream">
            😱
          </span>
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      </div>
    );
  }

  // const [message, setMessage] = useState("Secret message incoming...");

  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => setShowMessage(false)}
      >
        Hide Message
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          setMessage("The secret of Monkey Island is ... wait, no spoilers!")
        }
      >
        Now really show the message!
      </button>
      <h2>{message}</h2>
    </div>
  );
}

/*_____________________________________________________________________________________________

📍 BUG:

`const [message, setMessage] = useState("Secret message incoming...");`
was placed after a conditional return:
`if (!showMessage) {
   return ...}`

💩

_______________________________________________________________________________________________

📍 RULES OF HOOKS:

Functions whose names start with `use` are called `Hooks` in React.

General Guidelines:
- Always call Hooks at the top level of your React function, before any early returns.
- Only call Hooks while React is rendering a function component.

👍🏼 Supported Hook Usage:
    ✅ Call them at the top level in the body of a function component.
    ✅ Call them at the top level in the body of a custom Hook.

👎🏼 Unsupported Hook Usage:
    ☠️ Do not call Hooks inside conditions or loops.
    ☠️ Do not call Hooks after a conditional `return` statement.
    ☠️ Do not call Hooks in event handlers.
    ☠️ Do not call Hooks in class components.
    ☠️ Do not call Hooks inside functions passed to `useMemo`, `useReducer`, or `useEffect`.

_____________________________________________________________________________________________*/
