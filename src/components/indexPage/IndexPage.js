import "./IndexPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import BusinessCard from "../businessCard/BusinessCard";
import MapContainer from "../MapContainer";

const API = process.env.REACT_APP_API_URL;
export default function IndexPage() {
  const [category, setCategory] = useState(null);
  const [display, setDisplay] = useState([]);
  function handleChange(e) {
    let target = e.target.id.includes("-")
      ? e.target.id.split("-").join("")
      : e.target.id;
    setCategory(e.target.id);
    axios
      .get(`${API}/businesses/categories/${category}`)
      .then((res) => setDisplay(res.data));
  }
  useEffect(() => {
    axios.get(`${API}/businesses`).then((res) => setDisplay(res.data));
  }, []);

  return (
    <div className="IndexPage">
      <div className="IndexPage__Categories">
        <h1>Categories</h1>
        <ul>
          <li id="restaurant" onClick={(e) => handleChange(e)}>
            Restaurants
          </li>
          <li id="social" onClick={(e) => handleChange(e)}>
            Social
          </li>
          <li id="barber shop" onClick={(e) => handleChange(e)}>
            Barber Shops
          </li>
          <li id="bank" onClick={(e) => handleChange(e)}>
            Banks
          </li>
          <li id="fashion" onClick={(e) => handleChange(e)}>
            Fashion
          </li>
          <li id="beauty" onClick={(e) => handleChange(e)}>
            Beauty
          </li>
          <li id="health and wellness" onClick={(e) => handleChange(e)}>
            Health & Wellness
          </li>
        </ul>
      </div>
      <div className="IndexPage__Cards">
        {display.map((business, index) => {
          return <BusinessCard business={business} key={index} />;
        })}
      </div>
      <div className="IndexPage__Map">
        {/* <MapContainer businesses={display} /> */}
      </div>
    </div>
  );
}
