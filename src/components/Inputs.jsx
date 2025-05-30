export function TextInput({ fieldName, required = false }) {
  return (
    <div className="input-field">
      <label htmlFor={fieldName}>{fieldName}</label>
      <input type="text" required={required} />
    </div>
  );
}

export function MultiLineInput({ fieldName }) {
  return (
    <div className="input-field multi-line">
      <label htmlFor={fieldName}>{fieldName}</label>
      <textarea name={fieldName} id={fieldName}></textarea>
    </div>
  );
}

export function DateInput({ fieldName, idName }) {
  return (
    <div className="input-field date">
      <label htmlFor={idName}>{fieldName}</label>
      <input type="date" name={fieldName} id={idName} />
    </div>
  );
}

export function PictureInput() {
  return (
    <div className="input-field pfp">
      <label htmlFor="profile-picture"></label>
      <input type="file" name="profile-picture" id="profile-picture" />
    </div>
  );
}
