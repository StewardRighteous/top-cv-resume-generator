import { Header, ProgressBar, Details } from "./components/Barrel";

export default function App() {
  return (
    <>
      <div className="resume-header">
        <Header />
        <ProgressBar />
      </div>
      <div className="resume-details">
        <Details />
      </div>
    </>
  );
}
