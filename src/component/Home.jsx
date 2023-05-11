import { useForm } from "react-hook-form";
import InputFields from "./common/InputField";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="genral-form">
        <h1>General Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="form-field">
            <InputFields
              type="text"
              label="fullname"
              placeholder="fullname"
              name="fullname"
              {...register("fullname", {
                required: true,
              })}
              errors={errors}
            />
            {errors?.fullname?.type === "required" && (
              <p className="error">This field is required*</p>
            )}
          </div>

          <div className="form-field">
            <InputFields
              type="text"
              label="loginid"
              placeholder="loginid"
              {...register("loginid", {
                required: true,
              })}
              errors={errors}
            />
            {errors?.loginid?.type === "required" && (
              <p className="error">This field is required*</p>
            )}
          </div>

          <div className="form-field">
            <InputFields
              type="text"
              label="password"
              placeholder ="password"
            {...register("password", {
                required: true,
              })} 
              errors={errors}
            />
            {errors?.password?.type === "required" && (
              <p className="error">This field is required*</p>
            )}
          </div>

          <div className="form-field">
            <InputFields
              type="text"
              label="cpassword"
              placeholder="cpassword"
              {...register("cpassword", {
                required: true,
              })}
              errors={errors}
            />
            {errors?.cpassword?.type === "required" && (
              <p className="error">This field is required*</p>
            )}
          </div>

          <div className="form-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
