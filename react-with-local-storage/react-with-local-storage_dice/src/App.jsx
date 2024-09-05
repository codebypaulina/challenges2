import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./App.css";
import { getD6Roll } from "./utils";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // Zustand für Würfe (rolls)
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  // Funktion zum Hinzufügen eines neuen Wurfs
  const handleRoll = () => {
    const newRollValue = { value: getD6Roll(), time: Date.now() }; // neuen Wurf erstellen
    setRolls([newRollValue, ...rolls]); // neuen Wurf an Anfang des Arrays setzen
  };

  // aktueller Wurfwert (erster Wert im "rolls"-Array)
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
