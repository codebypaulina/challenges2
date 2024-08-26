import "./App.css";

export default function App() {
  return (
    <main>
      <Button>HEEELLLOOOO I'M BUTTON 1</Button>
      <Button>I'M THE SECOND ONE</Button>
      <Button>THIRD ...</Button>
      <Button>FOURTH!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
