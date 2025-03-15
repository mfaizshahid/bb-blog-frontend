"use client";
import { AppStore } from "@/redux/store";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import MDEditor from "@uiw/react-md-editor";

// tags = [
//   {
//     title: 'stirng'
//   }
// ]
const WriteBlogSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
  // cover_img: Yup.string().url().required("Required"),
  user: Yup.object().required("Required"),
  tags: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Required"),
    })
  ),
});

const WriteBlog = () => {
  const { user } = useSelector((state: AppStore) => state.authentication);
  const writeBlogForm = useFormik({
    initialValues: {
      title: "",
      content: "",
      user: {
        connect: [{ id: user!.id }],
      },
      tags: [],
    },
    validationSchema: WriteBlogSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex items-center justify-center">
      <FormikProvider value={writeBlogForm}>
        <form
          onSubmit={writeBlogForm.handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* Title field */}
          <Field className="mb-5">
            <Label className="text-sm/6 font-medium">Title</Label>
            <Input
              name="title"
              type="text"
              placeholder="Title"
              className="mt-1 block w-full rounded-lg border  py-1.5 px-3"
              onChange={writeBlogForm.handleChange}
              value={writeBlogForm.values.title}
            />
            {writeBlogForm.errors.title ? (
              <p className="text-red-500 mt-2">{writeBlogForm.errors.title}</p>
            ) : null}
          </Field>

          {/* Content field */}
          {/*For name Property: https://github.com/uiwjs/react-md-editor/issues/286 */}
          {/* For on change: https://stackoverflow.com/a/66341947 */}
          <MDEditor
            textareaProps={{
              name: "content",
            }}
            value={writeBlogForm.values.content}
            onChange={(e) => {
              writeBlogForm.handleChange({
                target: { name: "content", value: e },
              });
            }}
          />

          {/* Tags array field */}
          <FieldArray name="tags">
            {({ push, remove }) => (
              <div>
                {writeBlogForm.values.tags.map((tag, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <Field>
                      <Label className="text-sm/6 font-medium">Tag</Label>
                      <Input
                        name={`tags[${index}].title`}
                        type="text"
                        placeholder="Tag"
                        className="block w-full rounded-lg border  py-1.5 px-3"
                        onChange={writeBlogForm.handleChange}
                        value={tag.title}
                      />
                      {writeBlogForm.errors.tags &&
                      writeBlogForm.errors.tags[index] &&
                      writeBlogForm.errors.tags[index].title ? (
                        <p className="text-red-500 mt-2">
                          {writeBlogForm.errors.tags[index].title}
                        </p>
                      ) : null}
                    </Field>
                    <button
                      type="button"
                      className="bg-red-500 text-white w-[100px] h-[40px] px-5 rounded-lg font-medium"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-black text-white py-2.5 px-5 rounded-lg font-medium"
                  onClick={() => push({ title: "" })}
                >
                  Add Tag
                </button>
              </div>
            )}
          </FieldArray>

          <button
            type="submit"
            className={clsx(
              "bg-black text-white py-2.5 px-5 rounded-lg font-medium",
              {
                "cursor-not-allowed bg-gray-300 text-black":
                  !writeBlogForm.isValid,
              }
            )}
            disabled={!writeBlogForm.isValid}
          >
            Login
          </button>
        </form>
      </FormikProvider>
    </div>
  );
};

export default WriteBlog;
