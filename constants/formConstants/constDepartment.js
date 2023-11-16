const keyLabelDepartmentInformation = [
  {
    type: "text",
    key: "name",
    label: "Department Name",
    size: 12,
    disable: false,
    required: true,
  },
  {
    type: "text",
    key: "description",
    label: "Description",
    size: 12,
    disable: false,
    required: true,
  },
];

const keyLabelServiceModule = [
  {
    type: "select",
    key: "service",
    label: "Service",
    size: 6,
    options: [
      { text: "", value: "" },
      { text: "MyPerancanganAwal", value: "MyPerancanganAwal" },
      { text: "Therapeutic Lifestyle", value: "Therapeutic Lifestyle" },
    ],
    disable: false,
    required: false,
  },
  {
    type: "selectMultiple",
    key: "module",
    label: "Module",
    size: 6,
    options: [],
    disable: false,
    required: false,
  },
];

const moduleSelection = {
  "": [],
  MyPerancanganAwal: [
    { text: "Health Monitoring Panel", value: "Health Monitoring Panel" },
    { text: "Chat Room", value: "Chat Room" },
    {
      text: "Dietary Information (Educational)",
      value: "Dietary Information (Educational)",
    },
    { text: "Reminder", value: "Reminder" },
  ],
  "Therapeutic Lifestyle": [
    {
      text: "ACP Information Module(Educational)",
      value: "ACP Information Module(Educational)",
    },
    { text: "ACP Forum", value: "ACP Forum" },
    { text: "Filter System", value: "Filter System" },
    { text: "ACP Procedure Management", value: "ACP Procedure Management" },
    { text: "ACP Training", value: "ACP Training" },
  ],
};

export default {
  keyLabelDepartmentInformation,
  keyLabelServiceModule,
  moduleSelection,
};
