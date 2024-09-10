import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onToggleAllLightsOn,
  onToggleAllLightsOff,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={onToggleAllLightsOff}
        disabled={lights.every((light) => !light.isOn)}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={onToggleAllLightsOn}
        disabled={lights.every((light) => light.isOn)}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
