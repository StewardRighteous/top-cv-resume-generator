import "../styles/details-button.css";

export default function Button({
  buttonName,
  buttonHighlight = false,
  buttonFunction,
}) {
  const className = buttonHighlight ? "highlight" : "";

  return (
    <button onClick={buttonFunction} className={className}>
      {buttonName}
    </button>
  );
}
