import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async (url) => {
  const response = await fetch(url);

  // Fetching-Fehler abfangen
  if (!response.ok) {
    const error = new Error(
      "ohhh noo, smth went wrong while fetching data; sorry for you"
    );

    // zusätzliche Info (Fehlerdetails & Statuscode) an error-Objekt anhängen
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function ISSTracker() {
  // useSWR, um Daten abzurufen
  // mutate, um Daten manuell zu aktualisieren, ohne auf Intervall zu warten
  const { data, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // Daten werden alle 5 sec neu abgerufen
  });

  // Fehler abfangen, wenn keine Daten vorhanden
  if (!data) {
    return <h1>Loading ...</h1>;
  }
  // alternativ: "if (isLoading) {..."
  // dann: "isLoading" in: "const { data, mutate, isLoading } = useSWR(..."

  // longitude & latitude aus Daten extrahieren (destructuring),
  // um an Map- & Controls-Komponente zu übergeben
  const { longitude, latitude } = data;

  // Funktion, um Daten manuell zu aktualisieren
  // [würde auch ohne funktionieren, allein mit "mutate()"]
  function handleRefresh() {
    mutate();
  }

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={handleRefresh}
      />
    </main>
  );
}
