"use client";
import { IApp } from "@/interfaces";
import { initUser, setAppState } from "@/redux/slices/authenticationSlice";
import { AppDispatch, AppStore } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function InitUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatchInitUser = useDispatch<AppDispatch>();
  const router = useRouter();

  const user = useSelector((state: AppStore) => state.authentication.user);
  const loading = useSelector(
    (state: AppStore) => state.authentication.loading
  );
  const error = useSelector((state: AppStore) => state.authentication.error);

  useEffect(() => {
    console.log("use Effect for init User");
    dispatchInitUser(initUser());
  }, [dispatchInitUser]);

  useEffect(() => {
    if (error.msg && error.type) {
      toast.error(error.msg);
      if (error.type === "global") {
        router.push(IApp.AppRoutes.auth.login);
      }
      if (error.routeTo) {
        router.push(error.routeTo);
      }
    }
    if (!user) {
      dispatchInitUser(setAppState(IApp.AppStates.UNAUTHENTICATED));
      router.push(IApp.AppRoutes.auth.login);
    } else if (!user.confirmed) {
      dispatchInitUser(setAppState(IApp.AppStates.EMAIL_VERIFICATION_PENDING));
      router.push(IApp.AppRoutes.auth.register);
    } else {
      dispatchInitUser(setAppState(IApp.AppStates.AUTHENTICATED));
      router.push(IApp.AppRoutes.user.dashboard);
    }
  }, [user, loading, error, dispatchInitUser, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return <>{children}</>;
}
