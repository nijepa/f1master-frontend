const models = {
  drivers: {
    id: 0,
    model: "drivers",
    fields: [
      { name: "id", type: "number", readonly: true, placeholder: "" },
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
  teams: {
    id: 0,
    model: "teams",
    fields: [
      { name: "id", type: "number", readonly: true, placeholder: "" },
      {
        name: "teamName",
        type: "text",
        readonly: false,
        placeholder: "team name",
        heading: "Name",
      },
      {
        name: "active",
        type: "checkbox",
        readonly: false,
        placeholder: "team",
        heading: "Active",
      },
    ],
  },
  events: {
    id: 0,
    model: "events",
    fields: [
      { name: "id", type: "number", readonly: true, placeholder: "" },
      {
        name: "event",
        type: "text",
        readonly: false,
        placeholder: "event name",
        heading: "Name",
      },
      {
        name: "active",
        type: "checkbox",
        readonly: false,
        placeholder: "team",
        heading: "Active",
      },
      {
        name: "raceStart",
        type: "text",
        readonly: false,
        placeholder: "team name",
        heading: "Race Start",
      },
      {
        name: "qualifyingStart",
        type: "text",
        readonly: false,
        placeholder: "team name",
        heading: "Race Start",
      },
    ],
  },
};
export default models;
