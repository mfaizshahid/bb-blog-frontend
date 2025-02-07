"use client";
import { useDebugValue } from "react";
import { useDispatch, UseDispatch } from "react-redux";
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1> Welcome to the Dashboard</h1>
        <button onClick={logout}>Click me</button>
      </main>
    </div>
  );
}
