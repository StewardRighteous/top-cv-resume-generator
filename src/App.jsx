import { Header, ProgressBar, Details, Button } from "./components/Barrel";

export default function App() {
  return (
    <>
      <div className="resume-header">
        <Header />
        <ProgressBar />
      </div>
      <div className="resume-details">
        <Details />
        <div className="details-buttons">
          <Button buttonName={"next"} />
          <Button buttonName={"next"} buttonHighlight={true} />
        </div>
      </div>
    </>
  );
}
