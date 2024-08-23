import "./App.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Hellooooo I'm a titleeeeee</h2>
      <label htmlFor="some-input">Enter some input:</label>
      <input id="some-input" type="text" />
      <a
        className="article__link"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        This is a nice link!
      </a>
    </article>
  );
}
