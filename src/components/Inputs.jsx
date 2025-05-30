export function TextInput({ fieldName, required = false }) {
  return (
    <label htmlFor={fieldName}>
      {fieldName}
      <input type="text" required={required} />
    </label>
  );
}

export function MultiLineInput({ fieldName }) {
  return (
    <label htmlFor={fieldName}>
      {fieldName}
      <textarea name={fieldName} id={fieldName}></textarea>
    </label>
  );
}

export function DateInput({ fieldName, idName }) {
  return (
    <label htmlFor={idName}>
      {fieldName}
      <input type="date" name={fieldName} id={idName} />
    </label>
  );
}

export function PictureInput() {
  return (
    <label htmlFor="profile-picture">
      <input type="file" name="profile-picture" id="profile-picture" />
    </label>
  );
}
