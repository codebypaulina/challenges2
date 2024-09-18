import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      <h3>Reviews:</h3>
      {data.reviews && data.reviews.length > 0 ? (
        <StyledList>
          {data.reviews.map((review) => (
            <li key={review._id}>
              <h4>{review.title}</h4>
              <p>
                {review.text} <br />
                <strong>Rating:</strong> {review.rating}/5
              </p>
            </li>
          ))}
        </StyledList>
      ) : (
        <p>No reviews for this product yet.</p>
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  h4 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 0 0 20px 0;
  }

  strong {
    color: gray;
  }
`;
