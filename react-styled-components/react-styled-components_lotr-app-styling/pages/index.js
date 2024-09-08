import Link from "next/link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Wrapper>
      <Link href="/volumes">Go to all volumes</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px;
`;
