import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  function handleIncrement() {
    setPeople(people + 1);
  }

  function handleDecrement() {
    // only decrement, if more than 1 people
    if (people > 1) {
      setPeople(people - 1);
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
