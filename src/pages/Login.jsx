import GoogleIcon from "@mui/icons-material/Google";
import React, { useState, useContext } from "react";
import { AuthPage } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, googleWith } = useContext(AuthPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-screen justify-items-start items-center bg-color-light dark:bg-color-dark">
      <div className="form-container w-[400px] h-[550px]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-color4-dark text-3xl font-medium text-center tracking-[0.1em] mb-3">
            LOGIN
          </h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="floating_email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              className=" peer"
              placeholder=" "
              name="floating_password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <button type="submit" className="btn">
              Login
            </button>
            <button
              type="button"
              className="btn flex items-center gap-2"
              onClick={googleWith}
            >
              <GoogleIcon /> Continue with Google
            </button>
          </div>
        </form>
      </div>
      <Link className="m-4 text-color-darkred text-xl" to="/register">
        New here? Create an account!
      </Link>
    </div>
  );
};

export default Login;
