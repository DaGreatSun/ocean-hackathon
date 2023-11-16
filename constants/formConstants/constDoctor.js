const keyLabelDoctorInfo = [
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
    key: "username",
    label: "Username",
    size: 12,
    disable: false,
    required: false,
  },
  {
    type: "text",
    key: "position",
    label: "Position",
    size: 6,
    disable: false,
    required: true,
  },
  {
    type: "select",
    key: "departments",
    label: "Department",
    size: 6,
    options: [],
    disable: false,
    required: true,
  },
];

export default {
  keyLabelDoctorInfo,
};
