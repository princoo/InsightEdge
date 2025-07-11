export const protectedRoutes = [
  {
    path: "/dashboard",
    allowedRoles: ["USER","ADMIN"],
  },
  {
    path: "/admin",
    allowedRoles: ["ADMIN"],
  },
];