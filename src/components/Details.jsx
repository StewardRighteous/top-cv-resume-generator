import { Input, MultiLineInput, PictureInput } from "./Inputs";
import "../styles/details.css";

export default function Details({
  sectionHeading,
  elements,
  changeDetails,
  details,
}) {
  function generateDetailElements() {
    const detailsElements = elements.map((element) => {
      if (
        element.type == "text" ||
        element.type == "email" ||
        element.type == "date" ||
        element.type == "tel"
      ) {
        return (
          <Input
            key={element.id}
            id={element.id}
            fieldName={element.fieldName}
            required={element.isRequired}
            changeDetails={changeDetails}
            details={details}
            type={element.type}
          />
        );
      } else if (element.type == "multi") {
        return (
          <MultiLineInput
            fieldName={element.fieldName}
            key={element.id}
            id={element.id}
            changeDetails={changeDetails}
            details={details}
          />
        );
      } else if (element.type == "pfp") {
        return (
          <PictureInput
            key={element.id}
            id={element.id}
            changeDetails={changeDetails}
            details={details}
          />
        );
      }
    });
    return detailsElements;
  }

  return (
    <div className="details">
      <h1>{sectionHeading}</h1>
      {generateDetailElements()}
    </div>
  );
}
