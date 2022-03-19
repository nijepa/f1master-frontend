const models = [
  {
    id: 0,
    model: "drivers",
    fields: [
      { name: "id", type: "text", readonly: true, placeholder: "" },
      {
        name: "name",
        type: "text",
        readonly: false,
        placeholder: "driver name",
        heading: "Name",
      },
      {
        name: "number",
        type: "text",
        readonly: false,
        placeholder: "driver number",
        heading: "Nr",
      },
      {
        name: "team",
        type: "text",
        readonly: false,
        placeholder: "team",
        heading: "Team",
      },
    ],
  },
];
export default models;
