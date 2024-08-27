import Entries from "./Entries";
import EntryForm from "./EntryForm";

export default function Main() {
  return (
    <main className="main">
      <EntryForm />
      <Entries />
    </main>
  );
}
