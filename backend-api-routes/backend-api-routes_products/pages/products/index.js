import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("api/products", fetcher);

  if (error) return <h2>An error occurred while fetching the data.</h2>;
  if (!data) return <h2>Loading ...</h2>;

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>
              Price: {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

/*
const fetcher = async (url) => {
    const response = await fetch(url);
  
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
  
      error.info = await response.json();
      error.status = response.status;
  
      throw error;
    }
  
    return response.json();
  };
*/
