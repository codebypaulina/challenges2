import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  const volumeSlug = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
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

      <Image
        src={currentVolume.cover}
        alt={`cover image of ${currentVolume.title}`}
        width={140}
        height={230}
      />
      <br />
      <br />

      {previousVolume ? (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← Previous Volume: <strong>{previousVolume.title}</strong>
        </Link>
      ) : null}
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>
          Next Volume: <strong>{nextVolume.title}</strong> →
        </Link>
      ) : null}
    </>
  );
}
