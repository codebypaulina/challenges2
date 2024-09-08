import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function Volumes({ onToggleDarkMode, isDarkMode }) {
  return (
    <Wrapper>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>

      <h2>All Volumes</h2>
      <StyledList>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={85}
              height={136}
            />
            <br />
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </li>
        ))}
      </StyledList>

      <ButtonDarkMode onClick={onToggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </ButtonDarkMode>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Button unten
  min-height: 100vh;

  h1 {
    margin: 0 0 25px 0;
  }

  p {
    margin: 0;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: auto 1fr auto; // li & re fest, mitte flexibel
  justify-items: center;
  align-items: start;
  gap: 20px;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  width: 85px;
  margin-top: 10px;
`;

const ButtonDarkMode = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 10px 15px;
  margin-top: 40px;
  align-self: flex-end;
`;
