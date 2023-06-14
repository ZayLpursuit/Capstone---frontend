import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import MapContainer from "./MapContainer";
import resIcon from "../assets/knife_fork.png"


const API=process.env.REACT_APP_API_URL
export default function IndexPage() {
  const [category, setCategory] = useState("boutique");
  const [display, setDisplay] = useState([]);
  function handleChange(e) {
    setCategory(e.target.id);
    axios.get(`${API}/businesses/categories/${category}`).then((res)=>setDisplay(res.data))
  }
  useEffect(() => {
    axios
      .get(`${API}/businesses`)
      .then((res) => setDisplay(res.data));
  }, []);


//   useEffect(() => {
//     axios
//       .get(`${API}/businesses/categories/${category}`)
//       .then((res) => setDisplay(res.data));
//   }, [category]);


  return (
    <div className="index-grid">
      <div className="grid test-b1">
        <div className="m-left">
          <aside className=" ">
            <h1 className="select-cat">Select a Category</h1>

            <ul className="category-options">
              <li id="restaurant" onClick={(e) => handleChange(e)}>
                <img src={resIcon}
                />
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

      <div className="index-container test-b2">
        {display.map((business, idx) => {
          return <Card business={business} key={idx} />;
        })}
      </div>
      <div className="col-3 index-map">
        <MapContainer businesses={display} />
      </div>
    </div>
  );
}
