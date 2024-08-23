import "./App.css";

/* Task 1: Render by Modifying the `App` component
export default function App() {
  return <h1>Hello world!</h1>;
}
*/

// Task 2: Create Your First Custom Component
export default function App() {
  return <HelloWorld />;
}

export function HelloWorld() {
  return <h1>Hello world!</h1>;
}
