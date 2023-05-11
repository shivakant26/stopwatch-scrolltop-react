import React from "react";
import { useForm } from "react-hook-form";

const InputFields = React.forwardRef(
  ({ placeholder, type, label }, ref) => {
    const {
      register,
      formState: { errors },
    } = useForm();

    return (
      <>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
          />
        </div>
      </>
    );
  }
);

export default InputFields;
