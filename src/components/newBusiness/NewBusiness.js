import "./NewBusiness.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
export default function AddBusiness() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    contact_num: "",
    year_opened: "",
    is_online: false,
    is_store: false,
    img: "",
    category: "",
    website: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });

    if (e.target.id === "is_online") {
      e.target.value = true;
    }

    if (e.target.id === "is_store") {
      e.target.value = true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${API}/businesses`, form).then(navigate("/businesses"));
  }

  return (
    <div className="NewBusiness">
      <h1>Tell Us About Your Black Owned Business!</h1>
      <div className="NewBusiness__Details">
        <img
          src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBidXNpbmVzcyUyMHdvbWFufGVufDB8fDB8fHww&w=1000&q=80"
          alt="woman with laptop"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>New Business</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={form.address}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="contact_num">Email</label>
          <input
            type="phone-number"
            id="contact_num"
            value={form.contact_num}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="year_opened">Year Opened</label>
          <input
            type="text"
            id="year_opened"
            value={form.year_opened}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="img">Image</label>
          <input
            type="text"
            id="img"
            value={form.img}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={form.category}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            value={form.website}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={form.description}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Add Business</button>
        </form>
      </div>
    </div>
  );
}
