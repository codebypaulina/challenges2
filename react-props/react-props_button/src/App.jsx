import "./App.css";

export default function App() {
  function handleClick() {
    alert("you clicked me!");
  }

  return (
    <Button
      text="click me!"
      disabled={false}
      color="white"
      backgroundColor="lightcoral"
      height="80px"
      width="100px"
      onClick={handleClick}
    />
  );
}

export function Button({
  color,
  backgroundColor,
  height,
  width,
  disabled,
  text,
  onClick,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        height: height,
        width: width,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
