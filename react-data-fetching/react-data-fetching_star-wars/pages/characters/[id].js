import { useRouter } from "next/router";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>Loading ...</h1>;
  /*  alternativ: "if (isLoading) {..."
      dann: "const { data, error, isLoading } = useSWR(..."  */

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
