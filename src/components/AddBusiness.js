import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    axios
      .post(`http://localhost:7777/businesses`, form)
      .then(navigate("/businesses"));
  }

  return (
    <div
      className="add-biz-Page"
      style={{ backgroundColor: "black", padding: "100px 100px" }}
    >
      <h1
        className="center-text margbottom addSlogan"
        style={{ color: "#f1cc24" }}
      >
        Show Your Support and Add a Black Owned Business Today!
      </h1>
      <div className="add-biz-sect">
        <div className="add-biz-info"></div>
        <div className="biz-form">
          <form
            className="d-grid pad w-80 centered"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="center-text">Add a Business</h1>

            <label htmlFor="name" className="acct-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="address" className="acct-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={form.address}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="contact_num" className="acct-label">
              Email
            </label>
            <input
              type="phone-number"
              id="contact_num"
              value={form.contact_num}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="year_opened" className="acct-label">
              Year Opened
            </label>
            <input
              type="text"
              id="year_opened"
              value={form.year_opened}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="img" className="acct-label">
              Image
            </label>
            <input
              type="text"
              id="img"
              value={form.img}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="category" className="acct-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              value={form.category}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="website" className="acct-label">
              Website
            </label>
            <input
              type="text"
              id="website"
              value={form.website}
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="description" className="acct-label">
              Description
            </label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => handleChange(e)}
            />

            <div>
              <button type="submit" className="biz-btn">
                Add Business
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
