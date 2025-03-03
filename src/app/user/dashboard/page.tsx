"use client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/redux/slices/authenticationSlice";
import { IApp } from "@/interfaces";

export default function Dashboard() {
  const dispatchLogout = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatchLogout(logoutUser());
    localStorage.removeItem("token");
    router.push(IApp.AppRoutes.auth.login);
  };

  return (
    <div className="">
      <main className="">
        <h1> Welcome to the Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </main>
    </div>
  );
}
