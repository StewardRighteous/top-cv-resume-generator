export function Input({
  fieldName,
  details,
  changeDetails,
  id,
  required = false,
  type,
}) {
  function handleInput(e) {
    const detailNewCopy = [...details];
    detailNewCopy.find((elem) => elem.id == id).value = e.target.value;
    changeDetails(detailNewCopy);
  }

  return (
    <div className="input-field">
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type={type}
        required={required}
        onChange={handleInput}
        value={details.find((elem) => elem.id == id).value}
      />
    </div>
  );
}

export function MultiLineInput({ fieldName, details, changeDetails, id }) {
  function handleInput(e) {
    const detailNewCopy = [...details];
    detailNewCopy.find((elem) => elem.id == id).value = e.target.value;
    changeDetails(detailNewCopy);
  }

  return (
    <div className="input-field multi-line">
      <label htmlFor={fieldName}>{fieldName}</label>
      <textarea
        name={fieldName}
        id={fieldName}
        onChange={handleInput}
        value={details.find((elem) => elem.id == id).value}
      ></textarea>
    </div>
  );
}

export function PictureInput({ details, changeDetails, id }) {
  function handleInput(e) {
    const detailNewCopy = [...details];
    detailNewCopy.find((elem) => elem.id == id).value = URL.createObjectURL(
      e.target.value
    );
    changeDetails(detailNewCopy);
  }

  return (
    <div className="input-field pfp">
      <label htmlFor="profile-picture">Picture</label>
      <input
        type="file"
        name="profile-picture"
        id="profile-picture"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleInput}
        value={details.find((elem) => elem.id == id).value}
      />
    </div>
  );
}
