import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useNewUser } from "../features/auth/addUserInfo";
import { useSingUp } from "../features/auth/singup";
import Spinner from "../ui/Spinner";
import styles from "./Login.module.css";

function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      adress: "",
      password: "",
      Vpassword: "",
    },
  });
  const { isPending, mutate } = useSingUp();
  const { mutate: addUser } = useNewUser();
  // const { data, isPending: gettingUser } = useNewUser();
  const navigate = useNavigate();
  function submit(data) {
    const { email, password, username, adress } = data;
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          addUser({
            id: data.user.id,
            username,
            adress,
          });
          navigate("/login");
          toast.success("An email has been sent");
        },
      }
    );
  }
  if (isPending) return <Spinner></Spinner>;
  const errorStyle = "text-sm ml-2 rounded text-red-500";
  return (
    <div className="">
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <p className={styles.formTitle}>Create your account</p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "username required",
            })}
          ></input>
          <span className={errorStyle}>{errors?.username?.message}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="adress"
            placeholder="adress"
            {...register("adress", {
              required: "adress required",
              validate: (v) => v.length > 10 || "minimum 10 character",
            })}
          ></input>
          <span className={errorStyle}>{errors?.adress?.message}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email", { required: "email required" })}
          ></input>
          <span className={errorStyle}>{errors?.email?.message}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            {...register("password", {
              required: "password required",
              validate: (v) => v.length > 7 || "Password is too small",
            })}
          ></input>
          <span className={errorStyle}>{errors?.password?.message}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            id="Vpassword"
            placeholder="Comfirm password"
            {...register("Vpassword", {
              required: "password required",
              validate: (v) =>
                getValues("password") === v || "Password do not match",
            })}
          ></input>
          <span className={errorStyle}>{errors?.Vpassword?.message}</span>
        </div>
        <button type="submit" className={styles.submit}>
          Sign in
        </button>

        <p className={styles.signupLink}>
          Already registred? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
