const generalPageElements = [
  {
    id: 6,
    fieldName: "Name",
    isRequired: true,
    type: "text",
    value: "",
  },
  {
    id: 1,
    fieldName: "Picture",
    isRequired: false,
    type: "pfp",
    value: "",
  },
  {
    id: 2,
    fieldName: "Date Of Birth",
    isRequired: true,
    type: "date",
    value: "",
  },
  {
    id: 3,
    fieldName: "Address",
    isRequired: false,
    type: "multi",
    value: "",
  },
  {
    id: 4,
    fieldName: "Email",
    isRequired: true,
    type: "email",
    value: "",
  },
  {
    id: 5,
    fieldName: "Phone",
    isRequired: true,
    type: "tel",
    value: "",
  },
];

const educationPageElements = [
  {
    id: 7,
    fieldName: "School Name",
    isRequired: true,
    type: "text",
    value: "",
  },
  {
    id: 8,
    fieldName: "Title Of Study",
    isRequired: true,
    type: "text",
    value: "",
  },
  {
    id: 9,
    fieldName: "Date Of Study",
    isRequired: true,
    type: "date",
    value: "",
  },
  {
    id: 10,
    fieldName: "Bachelor Degree",
    isRequired: false,
    type: "text",
    value: "",
  },
  {
    id: 11,
    fieldName: "Master Degree",
    isRequired: false,
    type: "text",
    value: "",
  },
  {
    id: 12,
    fieldName: "Other Skills",
    isRequired: false,
    type: "multi",
    value: "",
  },
];

const experiencePageElements = [
  {
    id: 13,
    fieldName: "Company Name",
    isRequired: true,
    type: "text",
    value: "",
  },
  {
    id: 14,
    fieldName: "Position Title",
    isRequired: true,
    type: "text",
    value: "",
  },
  {
    id: 15,
    fieldName: "Main Responsibilities",
    isRequired: false,
    type: "multi",
    value: "",
  },
  {
    id: 16,
    fieldName: "Reference",
    isRequired: false,
    type: "multi",
    value: "",
  },
  {
    id: 17,
    fieldName: "Date(From)",
    isRequired: true,
    type: "date",
    value: "",
  },
  {
    id: 18,
    fieldName: "Date(To)",
    isRequired: true,
    type: "date",
    value: "",
  },
];

export { generalPageElements, experiencePageElements, educationPageElements };
