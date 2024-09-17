import useSWR from "swr";

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

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <h2>{error.message}</h2>;
  if (!data) return <h2>Loading ...</h2>;

  return (
    <>
      <h1>Random Character</h1>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>

      <p>
        <strong>Twitter:</strong> {data.twitter}
      </p>
      <p>
        <strong>Geohash:</strong> {data.geohash}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
    </>
  );
}
