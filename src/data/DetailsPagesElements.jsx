const generalPageElements = [
  {
    id: 6,
    fieldName: "Name",
    isRequired: true,
    type: "text",
  },
  {
    id: 1,
    fieldName: "Picture",
    isRequired: false,
    type: "pfp",
  },
  {
    id: 2,
    fieldName: "Date Of Birth",
    isRequired: true,
    type: "date",
  },
  {
    id: 3,
    fieldName: "Address",
    isRequired: false,
    type: "multi",
  },
  {
    id: 4,
    fieldName: "Email",
    isRequired: true,
    type: "text",
  },
  {
    id: 5,
    fieldName: "Phone",
    isRequired: true,
    type: "text",
  },
];

const educationPageElements = [
  {
    id: 7,
    fieldName: "School Name",
    isRequired: true,
    type: "text",
  },
  {
    id: 8,
    fieldName: "Title Of Study",
    isRequired: true,
    type: "text",
  },
  {
    id: 9,
    fieldName: "Date Of Study",
    isRequired: true,
    type: "date",
  },
  {
    id: 10,
    fieldName: "Bachelor Degree",
    isRequired: false,
    type: "text",
  },
  {
    id: 11,
    fieldName: "Master Degree",
    isRequired: true,
    type: "text",
  },
  {
    id: 12,
    fieldName: "Other Skills",
    isRequired: true,
    type: "multi",
  },
];

const experiencePageElements = [
  {
    id: 13,
    fieldName: "Company Name",
    isRequired: true,
    type: "text",
  },
  {
    id: 14,
    fieldName: "Position Title",
    isRequired: true,
    type: "text",
  },
  {
    id: 15,
    fieldName: "Main Responsibilities",
    isRequired: true,
    type: "multi",
  },
  {
    id: 16,
    fieldName: "Reference",
    isRequired: false,
    type: "multi",
  },
  {
    id: 17,
    fieldName: "Date(From)",
    isRequired: true,
    type: "date",
  },
  {
    id: 18,
    fieldName: "Date(To)",
    isRequired: true,
    type: "date",
  },
];

export { generalPageElements, experiencePageElements, educationPageElements };
