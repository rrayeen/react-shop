import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
//import { GetLogin } from "../features/auth/login";
//import { login } from "../services/apiSupabase";
import { GetLogin } from "../features/auth/login";
import Spinner from "../ui/Spinner";

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isPending, mutate } = GetLogin();

  function submit(data) {
    mutate(data);
  }
  if (isPending) return <Spinner></Spinner>;

  return (
    <div className="">
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <p className={styles.formTitle}>Sign in to your account</p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", { required: "Email required" })}
          ></input>
          <span></span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "password required" })}
          ></input>
        </div>
        <button type="submit" className={styles.submit}>
          Sign in
        </button>

        <p className={styles.signupLink}>
          No account?
          <Link to="/singup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
