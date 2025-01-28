import Form from "next/form";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form action="" className="flex flex-col gap-4">
          <Field>
            <Label className="text-sm/6 font-medium text-white">Name</Label>
            <Description className="text-sm/6 text-white/50">
              Use your real name so people will recognize you.
            </Description>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </Field>
          <Input name="email" type="email" />
          <Input name="password" type="password" />
        </Form>
      </main>
    </div>
  );
}
