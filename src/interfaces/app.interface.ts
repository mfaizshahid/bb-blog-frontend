export const AppRoutes = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
  },
  user: {
    dashboard: "/user/dashboard",
    blog: {
      default: "/user/blog",
      create: "/user/blog/create",
      edit: "/user/blog/edit",
    },
  },
};

export enum AppStates {
  UNAUTHENTICATED = "UNAUTHENTICATED",
  EMAIL_VERIFICATION_PENDING = "EMAIL_VERIFICATION_PENDING",
  AUTHENTICATED = "AUTHENTICATED",
}
