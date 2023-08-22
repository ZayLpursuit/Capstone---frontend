import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import MapContainer from "./MapContainer";


const API=process.env.REACT_APP_API_URL
export default function IndexPage() {
  const [category, setCategory] = useState(null);
  const [display, setDisplay] = useState([]);
  function handleChange(e) {
    console.log("id", e.target.id)
    let target = e.target.id.includes("-") ? e.target.id.split("-").join("") : e.target.id;
    console.log("target", target)

    setCategory(e.target.id);
    axios.get(`${API}/businesses/categories/${category}`).then((res)=>setDisplay(res.data))
  }
  useEffect(() => {
    // const url = category
      // ? `${API}/businesses/categories/${category}`
      // : `${API}/businesses`;
    axios.get(`${API}/businesses`).then((res) => setDisplay(res.data));
  }, []);

  return (
    <div className="index-grid">
      <div className="grid test-b1">
        <div className="m-left">

          <aside className=" ">
            <h1 className="select-cat">Categories</h1>

            <ul className="category-options">
              <li id="restaurant"  className="yellow" onClick={(e) => handleChange(e)}>
                Restaurants
              </li>
              <li id="social" className="yellow" onClick={(e) => handleChange(e)}>
                Social
              </li>
              <li id="barber shop" className="yellow" onClick={(e) => handleChange(e)}>
                Barber Shops
              </li>
              <li id="bank" className="yellow" onClick={(e) => handleChange(e)}>
                Banks
              </li>
              <li id="fashion"  className="yellow" onClick={(e) => handleChange(e)}>
                Fashion
              </li>
              <li id="beauty" className="yellow" onClick={(e) => handleChange(e)}>
                Beauty
              </li>
              <li id="health and wellness" className="yellow" onClick={(e) => handleChange(e)}>
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
        <MapContainer businesses={display} />
      </div>
    </div>
  );
}
