import { Header, ProgressBar, Details, Button } from "./components/Barrel";
import {
  generalPageElements,
  experiencePageElements,
  educationPageElements,
} from "./data/DetailsPagesElements";
import "./styles/general.css";
import "./styles/app.css";
import { useState } from "react";

// TODO: Show Pages According to Input
// TODO: Check if all data is received and show Resume
// TODO: Build and Design Resume Page

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function goToFirstPage() {
    setCurrentPage(0);
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
  } else if (currentPage == 1) {
    secondButtonDetails.buttonName = "next";
    secondButtonDetails.buttonFunction = nextPage;
    secondButtonDetails.buttonHighlight = true;
  } else {
    secondButtonDetails.buttonName = "submit";
    secondButtonDetails.buttonHighlight = true;
  }

  return (
    <div className="resume">
      <div className="resume-header">
        <Header />
        <ProgressBar progress={currentPage} />
      </div>
      <div className="resume-details">
        <Details
          sectionHeading={detailsSection.sectionName}
          elements={detailsSection.sectionElements}
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
