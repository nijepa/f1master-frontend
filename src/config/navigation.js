const navigation = {
  main: {
    leftLink: { title: "play", to: "/playtoearn", for: "ROLE_USER" },
    rightLink: { title: "superlicense", to: "/superlicense" },
    groupedLinks: [
      { id: 1, title: "F1", to: "/f1" },
      { id: 2, title: "News", to: "/news" },
      { id: 3, title: "Social Media", to: "/socialmedia" },
      { id: 4, title: "Fantasy", to: "/fantasy", for: "ROLE_USER" },
    ],
    adminLink: { title: "admin", to: "/admin", for: "ROLE_ADMIN" },
    profileLink: { title: "Profile", to: "/profile", for: "ROLE_USER" },
  },
  admin: {
    leftLink: { title: "RESULTS", to: "/admin/results", for: "ROLE_ADMIN" },
    rightLink: { title: "USERS", to: "/admin/users", for: "ROLE_ADMIN" },
    groupedLinks: [
      { id: 1, title: "Drivers", to: "/admin/drivers", for: "ROLE_ADMIN" },
      { id: 2, title: "Teams", to: "/admin/teams", for: "ROLE_ADMIN" },
      { id: 3, title: "Events", to: "/admin/events", for: "ROLE_ADMIN" },
    ],
    profileLink: { title: "Profile", to: "/profile", for: "ROLE_USER" },
  },
};
export default navigation;
