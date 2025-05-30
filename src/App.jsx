import { Header, ProgressBar, Details, Button } from "./components/Barrel";
import "./styles/general.css";

export default function App() {
  return (
    <>
      <div className="resume-header">
        <Header />
        <ProgressBar />
      </div>
      <div className="resume-details">
        <Details sectionHeading={"Experience"} />
        <div className="details-buttons">
          <Button buttonName={"next"} />
          <Button buttonName={"submit"} buttonHighlight={true} />
        </div>
      </div>
    </>
  );
}
