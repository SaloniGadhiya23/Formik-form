import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter (A–Z)")
    .matches(/[0-9]/, "Must contain at least one number (0–9)")
    .matches(/[@$!%*?&#^(){}[\]-_=+]/, "Must contain at least one special symbol")
    .required("Password is required"),

  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be greater than 0")
    .required("Age is required"),
});
