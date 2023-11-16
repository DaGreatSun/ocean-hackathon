const keyLabelSchedulerInfo = [
  {
    type: "text",
    key: "title",
    label: "Title",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "datetime-local",
    key: "appointmentDateTime",
    label: "Appointment Date",
    size: 6,
    disable: false,
    required: false,
  },
  {
    type: "select",
    key: "appointmentType",
    label: "Type of Appointment",
    size: 12,
    options: [
      { text: "", value: "" },
      { text: "Clinical Examination", value: "Clinical Examination" },
      { text: "Teleconsultation", value: "Teleconsultation" },
      { text: "Periodic Checkup", value: "Periodic Checkup" },
    ],
    disable: false,
    required: true,
  },
  {
    type: "select",
    key: "patient",
    label: "Attending Patient",
    size: 12,
    options: [
      { text: "", value: "" },
      { text: "Lei Wing Yee", value: "Lei Wing Yee" },
      { text: "Phang Kean Seng", value: "Phang Kean Seng" },
      { text: "Ali bin Ahmad", value: "Ali bin Ahmad" },
      { text: "Gayathri", value: "Gayathri" },
      { text: "Lim Ee Wern", value: "Lim Ee Wern" },
    ],
    disable: true,
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
  keyLabelSchedulerInfo,
};
