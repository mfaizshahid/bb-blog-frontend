"use client";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useFormik } from "formik";
import { IAuth } from "@/interfaces";
import * as Yup from "yup";
import { useRegisterApiHook } from "@/hooks/auth.hooks";
import { toast } from "react-toastify";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required").max(16),
});
export default function Register() {
  const { isPending, mutate } = useRegisterApiHook();
  const registerForm = useFormik<IAuth.RegisterApiPayload>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      mutate(values, {
        onError(error) {
          toast.error(error.message);
        },
        onSuccess(data) {
          toast.success("User registered successfully");
          // TODO: Store jwt token in localstorage
          // Store user object
          // Redirect to dashboard
        },
      });
    },
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          onSubmit={registerForm.handleSubmit}
          className="flex flex-col gap-4"
        >
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium">Username</Label>
            <Input
              name="username"
              type="text"
              placeholder="Username"
              className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
              onChange={registerForm.handleChange}
              value={registerForm.values.username}
            />
            <p className="text-red-500 mt-2">{registerForm.errors.username}</p>
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
              onChange={registerForm.handleChange}
              value={registerForm.values.email}
            />
            <p className="text-red-500 mt-2">{registerForm.errors.email}</p>
          </Field>
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium">Password</Label>
            <Input
              placeholder="Password"
              name="password"
              type="password"
              className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
              onChange={registerForm.handleChange}
              value={registerForm.values.password}
            />
            <p className="text-red-500 mt-2">{registerForm.errors.password}</p>
          </Field>
          <button
            type="submit"
            className={clsx(
              "bg-black text-white py-2.5 px-5 rounded-lg font-medium",
              {
                "cursor-not-allowed bg-gray-300 text-black":
                  !registerForm.isValid,
              }
            )}
            disabled={!registerForm.isValid && isPending}
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
