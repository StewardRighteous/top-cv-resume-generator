export default function ProgressIcon({ sectionNumber, sectionName }) {
  return (
    <div className="progress-icon">
      <p>{sectionNumber}</p>
      <h2>{sectionName}</h2>
    </div>
  );
}
