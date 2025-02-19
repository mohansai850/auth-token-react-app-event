import { redirect } from "react-router-dom";

export const getAuthToken = () => localStorage.getItem("token");

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth?mode=login");
  }
  return null;
};
