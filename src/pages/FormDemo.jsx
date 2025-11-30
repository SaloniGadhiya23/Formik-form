import React, { useState } from "react";
import { Formik, Form } from "formik";
import CommonInput from "../components/CommonInput";
import { formSchema } from "../validation/formSchema";

const FormDemo = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f5f5f5",
      minHeight: "100vh",
      padding: "50px 0"
    }}>
      <div style={{
        width: "400px",
        margin: "0 auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#333"
        }}>Reusable Formik Form</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "", age: "" }}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmittedData(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <CommonInput label="Full Name" name="name" type="text" placeholder="Enter name" />
            <CommonInput label="Email Address" name="email" type="email" placeholder="Enter email" />
            <CommonInput label="Password" name="password" type="password" placeholder="Enter password" />
            <CommonInput label="Age" name="age" type="number" placeholder="Enter age" />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(to right, #4facfe, #00f2fe)",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Submit
            </button>
          </Form>
        </Formik>

        {submittedData && (
          <div style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f0f8ff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#333" }}>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDemo;
