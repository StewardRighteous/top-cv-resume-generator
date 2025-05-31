import ProgressIcon from "./ProgressIcon";
import "../styles/progress-bar.css";

export default function ProgressBar({ progress }) {
  const section1Completed = progress > 0 ? true : false;
  const section2Completed = progress > 1 ? true : false;
  const section3Completed = progress > 2 ? true : false;

  return (
    <div className="progress-bar">
      <ProgressIcon
        sectionNumber={1}
        sectionName={"General"}
        completed={section1Completed}
      />
      <div
        className={
          section1Completed ? "progress-line completed" : "progress-line"
        }
      ></div>
      <ProgressIcon
        sectionNumber={2}
        sectionName={"Education"}
        completed={section2Completed}
      />
      <div
        className={
          section2Completed ? "progress-line completed" : "progress-line"
        }
      ></div>
      <ProgressIcon
        sectionNumber={3}
        sectionName={"Experience"}
        completed={section3Completed}
      />
    </div>
  );
}
