import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import MapContainer from "./MapContainer";
import { Button, ButtonGroup } from "@mui/material";



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
    const url = category
      ? `http://localhost:7777/businesses/categories/${category}`
      : `http://localhost:7777/businesses`;
    axios.get(url).then((res) => setDisplay(res.data));
  }, [category]);

  return (
    <div className="index-grid">
      <div className="grid test-b1">
        <div className="m-left">
          <aside className="category-section">
            <h1 className="select-cat">Categories</h1>
            <br />
            <ButtonGroup orientation="vertical" className="buttons-group">
              <Button
                className="categories"
                id="restaurant"
                onClick={(e) => handleChange(e)}
              >
                <h5>Restaurants</h5>
                <p>&#x1F374;</p>
              </Button>
              <Button
                className="categories"
                id="social"
                onClick={(e) => handleChange(e)}
              >
                <h5>Social</h5>
                <p>&#x1F3B6;</p>
              </Button>
              <Button
                className="barber"
                id="barbershop"
                onClick={(e) => handleChange(e)}
              >
                <h5>Barber Shops</h5>
                <p>&#x1F488;</p>
              </Button>
              <Button
                className="categories"
                id="bank"
                onClick={(e) => handleChange(e)}
              >
                <h5>Banks</h5>
                <p>&#x1F4B0;</p>
              </Button>
              <Button
                className="categories"
                id="fashion"
                onClick={(e) => handleChange(e)}
              >
                <h5>Fashion</h5>
                <p>&#x1F460;</p>
              </Button>
              <Button
                className="categories"
                id="beauty"
                onClick={(e) => handleChange(e)}
              >
                <h5>Beauty</h5>
                <p>&#x1F484;</p>
              </Button>
              <Button
                className="categories"
                id="health-and-wellness"
                onClick={(e) => handleChange(e)}
              >
                <h5>Health and Wellness</h5>
                <p>&#x1F486;</p>
              </Button>
            </ButtonGroup>
          </aside>
        </div>
      </div>

      <div className="index-container test-b2">
        {display?.map((business, idx) => {
          return <Card business={business} key={idx} />;
        })}
      </div>
      <div className="col-3 index-map">
        <MapContainer businesses={display} />
      </div>
    </div>
  );
}
