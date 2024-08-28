import "./Card.css";

/* Bonus: change Card component so that it receives a `color` prop
          & set the background-color of the Card to this value.
          Use the color property of each fruit object for this prop. */
export default function Card({ name, color }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  );
}
