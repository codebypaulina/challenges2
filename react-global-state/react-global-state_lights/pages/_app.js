import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
  { id: "7", name: "Garden", isOn: false },
  { id: "8", name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const isDimmed = lights.every((light) => !light.isOn);

  function handleToggleIsOn(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleToggleAllLightsOn() {
    setLights(
      lights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
    );
  }

  function handleToggleAllLightsOff() {
    setLights(
      lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
    );
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggleIsOn={handleToggleIsOn}
        onToggleAllLightsOn={handleToggleAllLightsOn}
        onToggleAllLightsOff={handleToggleAllLightsOff}
      />
    </Layout>
  );
}

/************ FCTN WITH IF-STATEMENT ************
 
  function handleToggleIsOn(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }
    
  function handleToggleAllLightsOn() {
    setLights(
      lights.map((light) => {
        if (!light.isOn) {
          return { ...light, isOn: true };
        }
        return light;
      })
    );
  }
    
  function handleToggleAllLightsOff() {
    setLights(
      lights.map((light) => {
        if (light.isOn) {
          return { ...light, isOn: false };
        }
        return light;
      })
    );
  }

  *************************************************/
