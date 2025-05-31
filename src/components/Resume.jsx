// Check ID values and their respective in data/DetailsPagesElements.jsx
import "../styles/resume.css";

export default function Resume({ details }) {
  function isProfilePicture() {
    const value = details.find((elem) => elem.id == 1).path;
    if (value) {
      return <img src={URL.createObjectURL(value)} alt="" />;
    }
    return <img src="/noimg.jpg" alt="" />;
  }

  function isAddressGiven() {
    const value = details.find((elem) => elem.id == 3).value;
    if (value != "") {
      return <p>Address: {value}</p>;
    }
  }

  function isBachelorDegreeGiven() {
    const value = details.find((elem) => elem.id == 10).value;
    if (value != "") {
      return <p>Completed{value} Bachelor Degree</p>;
    }
  }
  function isMasterDegreeGiven() {
    const value = details.find((elem) => elem.id == 11).value;
    if (value != "") {
      return <p>Completed {value} Master Degree </p>;
    }
  }
  function isOtherSkillGiven() {
    const value = details.find((elem) => elem.id == 12).value;
    if (value != "") {
      return <p>Other Skills such as {value}</p>;
    }
  }

  function isMainResponsibilitiesGiven() {
    const value = details.find((elem) => elem.id == 15).value;
    if (value != "") {
      return <p>{value}</p>;
    }
  }
  function isReferencesGiven() {
    const value = details.find((elem) => elem.id == 16).value;
    if (value != "") {
      return <p>References : {value}</p>;
    }
  }

  return (
    <div className="final-resume">
      <div className="resume-card profile-card">
        {isProfilePicture()}
        <h1>{details.find((elem) => elem.id == 6).value}</h1>
      </div>
      <div className="resume-card">
        <h1>General</h1>
        <hr />
        <p>{details.find((elem) => elem.id == 2).value}</p>
        <p>Phone: {details.find((elem) => elem.id == 5).value}</p>
        <p>Email: {details.find((elem) => elem.id == 4).value}</p>
        {isAddressGiven()}
      </div>
      <div className="resume-card">
        <h1>Education</h1>
        <hr />
        <p>School : {details.find((elem) => elem.id == 7).value}</p>
        <p>{details.find((elem) => elem.id == 8).value} course</p>
        <p>
          Completed schooling in {details.find((elem) => elem.id == 9).value}
        </p>
        {isBachelorDegreeGiven()}
        {isMasterDegreeGiven()}
        {isOtherSkillGiven()}
      </div>
      <div className="resume-card">
        <h1>Experience</h1>
        <hr />
        <p>Worked in {details.find((elem) => elem.id == 13).value}</p>
        <p>{details.find((elem) => elem.id == 14).value} Role</p>
        {isMainResponsibilitiesGiven()}
        {isReferencesGiven()}
        <p>
          Worked from {details.find((elem) => elem.id == 17).value} to{" "}
          {details.find((elem) => elem.id == 18).value}
        </p>
      </div>
    </div>
  );
}
