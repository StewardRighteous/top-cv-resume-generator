import { TextInput, MultiLineInput, PictureInput, DateInput } from "./Inputs";

export default function Details({ sectionHeading }) {
  return (
    <>
      <h1>{sectionHeading}</h1>
      <TextInput />
      <MultiLineInput />
      <PictureInput />
      <DateInput />
    </>
  );
}
