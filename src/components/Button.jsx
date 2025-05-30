export default function Button({
  buttonName,
  buttonHighlight = false,
  buttonFunction,
}) {
  return (
    <button
      onClick={buttonFunction}
      style={
        buttonHighlight
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
    >
      {buttonName}
    </button>
  );
}
