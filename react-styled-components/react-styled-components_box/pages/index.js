import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import StyledBox from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox isBlack={true} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
`;
