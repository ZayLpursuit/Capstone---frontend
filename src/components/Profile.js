import axios from "axios";
import { useEffect, useState } from "react";
import auth from "../base";

import { useNavigate } from "react-router-dom";
import AddHomeIcon from "@mui/icons-material/AddHome";
import Card from "./Card";

const styles = {
  width: "100px",
  height: "60px",
};

const API = process.env.REACT_APP_API_URL;
export default function Profile({ currentUser, business }) {
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({});
  const [favs, setFavs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${API}/users/firebase/${currentUser?.uid}`)

        .then((res) => {
          setUser(res.data[0]);
          setForm(res.data[0]);
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${API}/users/user/${currentUser?.uid}/favorites`)
        .then((res) => setFavs(res.data));
    }
  }, [currentUser]);

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function removeFromFavorites() {
    console.log(currentUser.uid);
    axios.delete(`${API}/users/user/${currentUser?.uid}/favorites`, business);
  }

  return (
    <div className="profile-container">
      {auth.currentUser ? (
        <h1 className="center-text white">
          {" "}
          Welcome Back, {user?.first_name}{" "}
        </h1>
      ) : (
        <>Signed Out</>
      )}
      <div className="">
        <h2>Account Info</h2>
        <form className=" grid  profile-form">
          <label htmlFor="first">First</label>
          <input
            type="text"
            id="first_name"
            value={form?.first_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="last">Last</label>
          <input
            type="text"
            id="last_name"
            value={form?.last_name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={form?.email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="newUsername">Username</label>
          <input
            type="text"
            id="username"
            value={form?.username}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="newPassword">Password</label>
          <input
            type="password"
            id="password"
            value={form?.password}
            onChange={(e) => handleChange(e)}
          />{" "}
          <div>
            <button type="submit" className="form-btns">
              Submit
            </button>
          </div>
        </form>

        <h2>Favorites</h2>
        <div className="user-favs-section">
          {favs[0] ? (
            favs.map((business, idx) => {
              //   console.log(business);
              return (
                <div className="user-prof-card">
                  <Card business={business} key={idx} />
                  <button onClick={removeFromFavorites}>Remove</button>
                </div>
              );
            })
          ) : (
            <p>You haven't added any businesses to your favorites yet</p>
          )}
        </div>

        <div onClick={() => navigate("/add-business")}>
          <h3>Add a Business</h3>
          <AddHomeIcon style={styles} />
        </div>
      </div>
    </div>
  );
}
