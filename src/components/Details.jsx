import { TextInput, MultiLineInput, PictureInput, DateInput } from "./Inputs";
import "../styles/details.css";

export default function Details({ sectionHeading, elements }) {
  console.log(elements);

  function generateDetailElements() {
    const detailsElements = elements.map((element) => {
      if (element.type == "text") {
        return (
          <TextInput
            key={element.id}
            fieldName={element.fieldName}
            required={element.isRequired}
          />
        );
      } else if (element.type == "multi") {
        return (
          <MultiLineInput fieldName={element.fieldName} key={element.id} />
        );
      } else if (element.type == "date") {
        return (
          <DateInput
            fieldName={element.fieldName}
            idName={element.fieldName}
            key={element.id}
          />
        );
      } else if (element.type == "pfp") {
        return <PictureInput key={element.id} />;
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
