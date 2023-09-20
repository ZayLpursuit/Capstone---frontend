import "./Sign_In.scss";
import { useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../base";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
export default function SignUp({ currentUser }) {
  const navigate = useNavigate();

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
    favorites: null,
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

      console.log(newUser);
      axios.post(`${API}/users`, { ...form, uid: newUser?.user?.uid });

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
    <div className="Sign_In">
      <div className="Sign_In__Container">
        <div className="Sign_In__Buttons">
          <button id="Log-In" onClick={(e) => handleToggle(e)}>
            Log In
          </button>
          <button id="Sign-up" onClick={(e) => handleToggle(e)}>
            Sign Up
          </button>
        </div>
        {signIn ? (
          <form className="Sign_In__Form" onSubmit={(e) => register(e)}>
            <h2>Create An Account</h2>
            <label htmlFor="first">
              First
            </label>
            <input
              type="text"
              id="first_name"
              value={form.first_name}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="last">
              Last
            </label>
            <input
              type="text"
              id="last_name"
              value={form.last_name}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="newUsername">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="newPassword">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className="Sign_In__Form" onSubmit={(e) => login(e)}>
            <h2>Log In</h2>
            <label htmlFor="login-email">
              Email
            </label>
            <input
              type="text"
              id="login_email"
              value={form.login_email}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Log In</button>
          </form>
        )}
      </div>
    </div>
  );
}
