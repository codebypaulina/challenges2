import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ isOn, name, onToggleIsOn }) {
  return (
    <LightButton type="button" onClick={onToggleIsOn} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
