import React from "react";
import { useField } from "formik";

const CommonInput = ({ label, ...props }) => {
  const [field, meta] = useField(props); 

  return (
    <div style={{ marginBottom: "18px" }}>
      {label && <label style={{ fontWeight: "600" }}>{label}</label>}

      <input
        {...field}
        {...props}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          border: meta.touched && meta.error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "5px"
        }}
      />

      {meta.touched && meta.error && (
        <div style={{ color: "red", marginTop: "4px", fontSize: "14px" }}>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default CommonInput;
