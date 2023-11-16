const keyLabelPatientInfo = [
  {
    type: "text",
    key: "firstName",
    label: "First Name",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "text",
    key: "lastName",
    label: "Last Name",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "text",
    key: "ic",
    label: "Identification Card",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "text",
    key: "mobile",
    label: "Mobile Number",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "text",
    key: "email",
    label: "Email",
    size: 12,
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "address",
    label: "Address",
    size: 12,
    disable: false,
    required: false,
  },
  {
    type: "select",
    key: "healthStatus",
    label: "Health Status",
    size: 12,
    options: [
      { text: "", value: "" },
      { text: "Healthy", value: "Healthy" },
      { text: "Moderate", value: "Moderate" },
      { text: "Critical", value: "Critical" },
    ],
    disable: false,
    required: true,
  },
  {
    type: "textarea",
    key: "remarks",
    label: "Remarks",
    size: 12,
    disable: false,
    required: false,
  },
];

export default {
  keyLabelPatientInfo,
};
