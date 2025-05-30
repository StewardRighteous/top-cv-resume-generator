export default function ProgressIcon({ sectionNumber, sectionName }) {
  return (
    <div className="progress-icon">
      <div className="icon">
        <p>{sectionNumber}</p>
      </div>
      <h2>{sectionName}</h2>
    </div>
  );
}
