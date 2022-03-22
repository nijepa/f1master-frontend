const navigation = {
  main: {
    leftLink: { title: "PLAY TO EARN", to: "/playtoearn" },
    rightLink: { title: "SUPERLICENSE", to: "/superlicense" },
    groupedLinks: [
      { id: 1, title: "F1", to: "/f1" },
      { id: 2, title: "News", to: "/news" },
      { id: 3, title: "Social Media", to: "/socialmedia" },
      { id: 4, title: "Fantasy", to: "/fantasy" },
      { id: 5, title: "admin", to: "/admin" },
    ],
  },
  admin: {
    leftLink: { title: "RESULTS", to: "/admin/results" },
    rightLink: { title: "USERS", to: "/admin/users" },
    groupedLinks: [
      { id: 1, title: "Drivers", to: "/admin/drivers" },
      { id: 2, title: "Teams", to: "/admin/teams" },
      { id: 3, title: "Events", to: "/admin/events" },
    ],
  },
};
export default navigation;
