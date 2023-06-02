import { useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../base";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  // const [logIn,setLogIn]=useState(false)
  const [signIn, setSignIn] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
    newUsername: "",
    newPassword: "",
    email: "",
    first_name: "",
    last_name: "",
    login_email: "",
  });
  function handleToggle(e) {
    if (e.target.id === "Log-In") {
      setSignIn(false);
    }
    if (e.target.id === "Sign-up") {
      setSignIn(true);
    }
  }
  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const register = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      axios.post(`https://melanated-diamonds.onrender.com/users`, form);

      navigate("/profile");
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        form.login_email,
        form.password
      );
      navigate("/businesses");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="default-grid">
      <div className="col2 width-70  centered ">
        <div className="btn-toggle">
          <button
            className="centered btn-size"
            id="Log-In"
            onClick={(e) => handleToggle(e)}
          >
            Log In{" "}
          </button>
          <button
            className="centered btn-size"
            id="Sign-up"
            onClick={(e) => handleToggle(e)}
          >
            Sign Up
          </button>
        </div>
        {signIn ? (
          <div className="  centered">
            <form className="d-grid pad" onSubmit={(e) => register(e)}>
              <h1 className="center-text">Create a New Account</h1>
              <label htmlFor="first" className="acct-label">
                First
              </label>
              <input
                type="text"
                id="first_name"
                value={form.first_name}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="last" className="acct-label">
                Last
              </label>
              <input
                type="text"
                id="last_name"
                value={form.last_name}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="email" className="acct-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="newUsername" className="acct-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={form.username}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="newPassword" className="acct-label">
                Password
              </label>
              <input
                type="text"
                id="password"
                value={form.password}
                onChange={(e) => handleChange(e)}
              />
              <div>
                <button type="submit" className="form-btns">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="  ">
            <form className="d-grid pad " onSubmit={(e) => login(e)}>
              <h1 className="center-text">Log Into Your Account</h1>
              <label htmlFor="login-email" className="acct-label">
                Email
              </label>
              <input
                type="text"
                id="login_email"
                value={form.login_email}
                onChange={(e) => handleChange(e)}
              />

              <label htmlFor="password" className="acct-label">
                Password
              </label>
              <input
                type="text"
                id="password"
                value={form.password}
                onChange={(e) => handleChange(e)}
              />
              <div>
                <button type="submit" className="form-btns">
                  Log In
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
