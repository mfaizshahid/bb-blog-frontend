"use client";
import { Field, Input, Label } from "@headlessui/react";
import { useFormik } from "formik";
import { IAuth } from "@/interfaces";
import * as Yup from "yup";
import clsx from "clsx";

import { useLoginApiHook } from "@/hooks/auth.hooks";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authenticationSlice";


const LoginSchema = Yup.object().shape({

  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Login() {
    const { isPending, mutate } = useLoginApiHook();
    const dispatch = useDispatch();
    const loginForm = useFormik<IAuth.LoginApiPayload>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values) => {
        mutate(values, {
          onError(error) {
            toast.error(error.message);
          },
          onSuccess(data) {
            toast.success("User logged in successfully");

            //Not sure how to change this section, we still have to store jwt
            //Therefore set user could be reused?
            //also this information should be 
            console.log(data.data);
            const _data = data.data;
            const jwt = _data.jwt;
            const user = _data.user;
            localStorage.setItem("token", jwt);
            dispatch(setUser(user));
            // Redirect to dashboard
          },
        });
      },
    });
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <form
            onSubmit={loginForm.handleSubmit}
            className="flex flex-col gap-4"
          >
            <Field className="mb-5">
            </Field>
            <Field className="mb-5">
              <Label className="text-sm/6 font-medium">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
              <p className="text-red-500 mt-2">{loginForm.errors.email}</p>
            </Field>
            <Field className="mb-5">
              <Label className="text-sm/6 font-medium">Password</Label>
              <Input
                placeholder="Password"
                name="password"
                type="password"
                className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />
              {/* <p className="text-red-500 mt-2">{loginForm.errors.password}</p> */}
            </Field>
            <button
              type="submit"
              className={clsx(
                "bg-black text-white py-2.5 px-5 rounded-lg font-medium",
                {
                  "cursor-not-allowed bg-gray-300 text-black":
                    !loginForm.isValid,
                }
              )}
              disabled={!loginForm.isValid && isPending}
            >
              Login
            </button>
          </form>
        </main>
      </div>
    );
  }
  
