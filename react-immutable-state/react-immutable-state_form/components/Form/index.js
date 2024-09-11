import { StyledForm, StyledInputContainer } from "./Form.styled";
// import { set } from "immer/dist/internal";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    const newName = event.target.value;

    updateMountain((draft) => {
      draft.name = newName;
    });
  }

  function handleAltitudeChange(event) {
    const newAltitude = event.target.value;

    updateMountain((draft) => {
      draft.values.altitude = newAltitude;
    });
  }

  function handleMountainRangeChange(event) {
    const newRange = event.target.value;

    updateMountain((draft) => {
      draft.values.mountainRange = newRange;
    });
  }

  /*
  function handleNameChange(event) {
    const newName = event.target.value;

    setMountain((prevMountain) => ({
      ...prevMountain,
      name: newName,
    }));
  }

  function handleAltitudeChange(event) {
    const newAltitude = event.target.value;

    setMountain((prevMountain) => ({
      ...prevMountain,
      values: {
        ...prevMountain.values,
        altitude: newAltitude,
      },
    }));
  }

  function handleMountainRangeChange(event) {
    const newRange = event.target.value;

    setMountain((prevMountain) => ({
      ...prevMountain,
      values: { ...prevMountain.values, mountainRange: newRange },
    }));
  }
  */

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
