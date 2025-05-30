import { TextInput, MultiLineInput, PictureInput, DateInput } from "./Inputs";

export default function Details({ sectionHeading }) {
  return (
    <div className="details">
      <h1>{sectionHeading}</h1>
      <TextInput fieldName={"Company Name"} required={true} />
      <TextInput fieldName={"Position Title"} required={true} />
      <MultiLineInput fieldName={"Main Responsibilities"} />
      <MultiLineInput fieldName={"Reference"} />
      <DateInput fieldName={"Date(From)"} required={true} />
      <DateInput fieldName={"Date(to)"} required={true} />
    </div>
  );
}
