import "./App.css";

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

export function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;

  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
