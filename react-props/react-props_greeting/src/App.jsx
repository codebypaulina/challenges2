import "./App.css";

export default function App() {
  return <Greeting name="Paulina" />;
}

export function Greeting({ name }) {
  const coaches = ["Klaus", "Jan", "Sven", "Gimena"];
  if (coaches.includes(name)) {
    return <h1>Hello, Coach!</h1>;
  }

  return <h1>Hello, {name}</h1>;
}
