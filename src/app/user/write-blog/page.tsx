import { useFormik } from "formik";
import * as Yup from "yup";

const WriteBlogSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
  cover_img: Yup.string().url().required("Required"),
  user: Yup.string().required("Required"),
  tags: Yup.array().required("Required"),
});

const WriteBlog = () => {
  const writeBlogForm = useFormik({
    initialValues: {
      title: "",
      content: "",
      cover_img: "",
      user: "",
      tags: [],
    },
    validationSchema: WriteBlogSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });


  return <h1>This is the write blog page</h1>;
};

export default WriteBlog;
