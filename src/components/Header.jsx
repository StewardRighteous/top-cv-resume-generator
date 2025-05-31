import "../styles/header.css";

export default function Header({ instruction }) {
  return (
    <header>
      <h1>Resume Builder</h1>
      <hr />
      <p>{instruction}</p>
    </header>
  );
}
