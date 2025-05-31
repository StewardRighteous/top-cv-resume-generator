import { Header, ProgressBar, Details, Button } from "./components/Barrel";
import {
  generalPageElements,
  experiencePageElements,
  educationPageElements,
} from "./data/DetailsPagesElements";
import "./styles/general.css";
import "./styles/app.css";
import { useState } from "react";

// TODO: Check if all data is received and show Resume
// TODO: Build and Design Resume Page

export default function App() {
  const formData = [];
  formData.push(
    ...generalPageElements,
    ...educationPageElements,
    ...experiencePageElements
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [resumeData, setResumeData] = useState(formData);
  const [instruction, setInstruction] = useState(
    "Fill out the details to generate your Resume"
  );

  console.log(resumeData);

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function goToFirstPage() {
    setCurrentPage(0);
  }

  function submitData() {
    const notFilled = [];
    resumeData.forEach((field) => {
      if (field.isRequired == true) {
        if (!field.value || field.value == "") {
          notFilled.push(field.id);
        }
      }
    });
    if (notFilled.length > 0) {
      setInstruction(
        `Please fill ${
          resumeData.find((elem) => elem.id == notFilled[0]).fieldName
        }`
      );
      if (notFilled[0] <= 6) {
        setCurrentPage(0);
      } else if (notFilled[0] <= 12) {
        setCurrentPage(1);
      } else if (notFilled[0] <= 18) {
        setCurrentPage(2);
      }
    }
  }

  const detailsSection = { sectionName: "", sectionElements: [] };

  if (currentPage == 0) {
    detailsSection.sectionName = "General";
    detailsSection.sectionElements = generalPageElements;
  } else if (currentPage == 1) {
    detailsSection.sectionName = "Education";
    detailsSection.sectionElements = educationPageElements;
  } else if (currentPage == 2) {
    detailsSection.sectionName = "Experience";
    detailsSection.sectionElements = experiencePageElements;
  }

  const firstButtonDetails = {
    buttonName: "",
    buttonFunction: () => {},
    buttonHighlight: false,
  };
  const secondButtonDetails = {
    buttonName: "",
    buttonFunction: () => {},
    buttonHighlight: false,
  };

  if (currentPage == 0) {
    firstButtonDetails.buttonName = "next";
    firstButtonDetails.buttonFunction = nextPage;
    firstButtonDetails.buttonHighlight = true;
  } else if (currentPage <= 2) {
    firstButtonDetails.buttonName = "previous";
    firstButtonDetails.buttonFunction = prevPage;
  } else {
    firstButtonDetails.buttonName = "edit";
    firstButtonDetails.buttonFunction = goToFirstPage;
  }

  if (currentPage == 0) {
    secondButtonDetails.buttonName = "submit";
    secondButtonDetails.buttonFunction = submitData;
  } else if (currentPage == 1) {
    secondButtonDetails.buttonName = "next";
    secondButtonDetails.buttonFunction = nextPage;
    secondButtonDetails.buttonHighlight = true;
  } else {
    secondButtonDetails.buttonName = "submit";
    secondButtonDetails.buttonHighlight = true;
    secondButtonDetails.buttonFunction = submitData;
  }

  return (
    <div className="resume">
      <div className="resume-header">
        <Header instruction={instruction} />
        <ProgressBar progress={currentPage} />
      </div>
      <div className="resume-details">
        <Details
          sectionHeading={detailsSection.sectionName}
          elements={detailsSection.sectionElements}
          changeDetails={setResumeData}
          details={resumeData}
        />
        <div className="details-buttons">
          <Button
            buttonName={firstButtonDetails.buttonName}
            buttonFunction={firstButtonDetails.buttonFunction}
            buttonHighlight={firstButtonDetails.buttonHighlight}
          />
          <Button
            buttonName={secondButtonDetails.buttonName}
            buttonFunction={secondButtonDetails.buttonFunction}
            buttonHighlight={secondButtonDetails.buttonHighlight}
          />
        </div>
      </div>
    </div>
  );
}
