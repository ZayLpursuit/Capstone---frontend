// import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
// import MapContainer from "./MapContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resIcon from "../assets/knife_fork.png";
import { Pagination } from "react-bootstrap";

export default function IndexPage() {
  const [category, setCategory] = useState("boutique");
  const [display, setDisplay] = useState([]);
  function handleChange(e) {
    setCategory(e.target.id);
    // axios.get(`http://localhost:7777/businesses/categories/${category}`).then((res)=>console.log(res))
  }
  useEffect(() => {
    axios
      .get(`http://localhost:7777/businesses/categories/${category}`)
      .then((res) => setDisplay(res.data));
  }, [category]);

  useEffect(() => {
    axios
      .get(`http://localhost:7777/businesses`)
      .then((res) => setDisplay(res.data));
  }, []);

  return (
    <div className="index-grid">
      <div className="grid test-b1">
        <div className="m-left">
          <aside className=" ">
            <h1 className="select-cat">Select a Category</h1>

            <ul className="category-options">
              <li id="restaurant" onClick={(e) => handleChange(e)}>
                Restaraunts
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
                Health and Wellness
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <div className="overflow-y">
        <div className="index-container test-b2">
          {display.map((business, idx) => {
            return <Card business={business} key={idx} />;
          })}
        </div>
      </div>

      <div className="col-3 index-map">
        {/* <MapContainer businesses={display} /> */}
      </div>
    </div>
  );
}
