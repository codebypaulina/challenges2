import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    // create array of 5 fruits
    { id: 1337, name: "🍌 Banana", color: "yellow" },
    { id: 1338, name: "🍎 Apple", color: "red" },
    { id: 1339, name: "🍍 Pineapple", color: "orange" },
    { id: 1340, name: "🍇 Grape", color: "purple" },
    { id: 1341, name: "🥑 Avocado", color: "green" },
  ];

  // create Card component for each fruit of array with "map"
  // name = text of component; id = key prop
  // Bonus: color = prop
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
