export default function ProgressIcon({
  sectionNumber,
  sectionName,
  completed = false,
}) {
  const className = completed ? "icon completed" : "icon";
  return (
    <div className="progress-icon">
      <div className={className}>
        <p>{sectionNumber}</p>
      </div>
      <h2>{sectionName}</h2>
    </div>
  );
}
