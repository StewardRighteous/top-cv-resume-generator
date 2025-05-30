import ProgressIcon from "./ProgressIcon";

export default function ProgressBar() {
  return (
    <div className="progress-bar">
      <ProgressIcon sectionNumber={1} sectionName={"General"} />
      <div className="progress-line"></div>
      <ProgressIcon sectionNumber={2} sectionName={"Education"} />
      <div className="progress-line"></div>
      <ProgressIcon sectionNumber={3} sectionName={"Experience"} />
    </div>
  );
}
