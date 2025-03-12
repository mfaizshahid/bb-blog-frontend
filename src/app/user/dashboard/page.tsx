"use client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/redux/slices/authenticationSlice";
import DashboardCard from "@/components/DashboardCard";

import { IApp } from "@/interfaces";

export default function Dashboard() {
  const dispatchLogout = useDispatch();
  const router = useRouter();
  const logout = () => {
    dispatchLogout(logoutUser());
    localStorage.removeItem("token");
    router.push(IApp.AppRoutes.auth.login);
  };

  const dashboardTitle = "This is a dashboard card";
  const dashboardCount = 10;

  return (
    <div className="">
      <main className="">
        <h1> Welcome to the Dashboard</h1>
        <button onClick={logout}>Logout</button>
        <div className="flex md:flex-row flex-col gap-4">
        <DashboardCard title={dashboardTitle} count={dashboardCount} />
        <DashboardCard title={dashboardTitle} count={dashboardCount} />
        <DashboardCard title={dashboardTitle} count={dashboardCount} />
        </div>

      </main>
    </div>
  );
}
