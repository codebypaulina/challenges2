import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheReturnOfTheKing() {
  const volumeSlug = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  const currentVolume = volumes[volumeSlug];
  const nextVolume = volumes[volumeSlug + 1];
  const previousVolume = volumes[volumeSlug - 1];

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map(({ ordinal, title }) => {
          return (
            <li key={volumeSlug}>
              {ordinal}: <strong>{title}</strong>
            </li>
          );
        })}
      </ul>
      {previousVolume ? (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← Previous Volume: {previousVolume.title}
        </Link>
      ) : null}
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>
          Next Volume: {nextVolume.title} →
        </Link>
      ) : null}
    </>
  );
}
