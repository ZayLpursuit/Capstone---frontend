import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import MapContainer from "./MapContainer"



export default function IndexPage(){
const [category,setCategory]=useState("boutique")
const [display,setDisplay]=useState([])
function handleChange(e){
    setCategory(e.target.id)
    // axios.get(`http://localhost:7777/businesses/categories/${category}`).then((res)=>console.log(res))
  }

  useEffect(() => {
    axios
      .get(`http://localhost:7777/businesses/categories/${category}`)
      .then((res) => setDisplay(res.data));
  }, [category]);

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
          <div className="grid m-left">
            <label htmlFor="online">
              Online Only
              <input type="checkbox" id="online" className="margin-top" />
            </label>

            <label htmlFor="in-store">
              Has Store
              <input type="checkbox" id="in-store" className="margin-top" />
            </label>
          </div>
        </div>
      </div>

      <div className="index-container test-b2">
        {display.map((business, idx) => {
          return <Card business={business} key={idx} />;
        })}
        </div>
        <><MapContainer businesses={display}/></>
    </div>
  );
}
