import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ArrowLeftIcon from "../../icons/arrow-left.svg";
import ArrowRightIcon from "../../icons/arrow-right.svg";
import ChevronLeftIcon from "../../icons/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <Wrapper>
        <StyledLinkAll href="/volumes">
          <ChevronLeftIcon /> All Volumes
        </StyledLinkAll>

        <h1>{title}</h1>
        <p>{description}</p>
      </Wrapper>

      <ContentContainer $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <em>{ordinal}</em> <br />
              <strong>{title}</strong>
            </li>
          ))}
        </StyledList>

        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </ContentContainer>

      <Nav>
        {previousVolume ? (
          <StyledLinkPrev href={`/volumes/${previousVolume.slug}`}>
            <ArrowLeftIcon />
            <div>
              <em>Previous Volume</em>
              <span>{previousVolume.title}</span>
            </div>
          </StyledLinkPrev>
        ) : null}

        {nextVolume ? (
          <StyledLinkNext href={`/volumes/${nextVolume.slug}`}>
            <div>
              <em>Next Volume</em>
              <span>{nextVolume.title}</span>
            </div>
            <ArrowRightIcon />
          </StyledLinkNext>
        ) : null}
      </Nav>
    </>
  );
}

// ************************************************************ HEADER

const Wrapper = styled.div`
  padding: 25px;

  h1 {
    margin: 25px 0;
  }

  p {
    margin: 0;
  }
`;

const StyledLinkAll = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font: var(--font-body); // hier anders

  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-bottom: 5px;
  }
`;

// ************************************************************ DETAILS

const ContentContainer = styled.div`
  display: flex;
  background-color: ${({ $color }) => $color};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;

  li {
    margin: 0 20px 20px 0;
  }

  em {
    display: inline-block;
    margin-bottom: 5px;
    color: var(--color-clouds); // hier anders
  }
`;

// ************************************************************ NAV

const Nav = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  padding: 25px;
`;

const commonStylesLinks = `
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLinkPrev = styled(Link)`
  ${commonStylesLinks}
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  gap: 10px;
  margin-bottom: 20px;
`;

const StyledLinkNext = styled(Link)`
  ${commonStylesLinks}
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  gap: 7px;
  text-align: right;
`;
