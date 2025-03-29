import React, { useState, useContext } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { AuthPage } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const { createUser, googleWith } = useContext(AuthPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="overflow-hidden flex flex-col flex-1 h-screen justify-items-center items-center bg-color-light dark:bg-color-dark mb-6">
      <div className="form-container">
        <form onSubmit={handleSubmit} 
        >
          <h2 className="text-color4-dark text-2xl font-medium text-center tracking-[0.1em] mb-3">
            REGISTER
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              id="floating_text"
              className="peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="floating_text" className="">
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              type="text"
              id="floating_lastname"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="floating_text">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="peer"
              placeholder=" "
              name="floating_password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => googleWith()}
          >
            Continue with Google <GoogleIcon/>
          </button>
        </form>
      </div>
      <div>
          <Link className=" text-color-darkred" to="/login">
        <p className="text-sm my-2">Do you have an account? Login</p>
      </Link>
      </div>
    
    </div>
  );
};

export default Register;
