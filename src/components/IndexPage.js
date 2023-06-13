// import { IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import MapContainer from "./MapContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

// import resIcon from "../assets/knife_fork.png"
import { Button, ButtonGroup } from "@mui/material";

const API = process.env.REACT_APP_API_URL;

export default function IndexPage() {
  const [category, setCategory] = useState("");
  const [display, setDisplay] = useState([]);
  function handleChange(e) {
    setCategory(e.target.id);
    // axios.get(`http://localhost:7777/businesses/categories/${category}`).then((res)=>console.log(res))
  }
  useEffect(() => {
    axios
      .get(`${API}/businesses/categories/${category}`)
      .then((res) => setDisplay(res.data));
  }, [category]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:7777/businesses`)
  //     .then((res) => setDisplay(res.data));
  // }, []);

  return (
    <div className="index-grid">
      <div className="grid test-b1">
        <div className="m-left">
          <aside className=" ">
            <h1 className="select-cat">Categories:</h1>

            <ButtonGroup>
              <Button id="restaurant" onClick={(e) => handleChange(e)}>Restaurants
                {" "}{" "}
                <br/>
                <i class="fa-solid fa-utensils"></i></Button>
</ButtonGroup>




            {/* <ul className="category-options"> */}
              {/* <ButtonGroup variant="outlined" aria-label="outlined button group"> */}
                {/* <Button> */}
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-fork-knife" style={{color: "#000000"}} /> */}
                {/* </Button> */}
              {/* </ButtonGroup> */}
              {/* <li id="restaurant" onClick={(e) => handleChange(e)}> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-fork-knife" /> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-fork-knife" style={{color: "#000000",}} /> */}
                {/* <img src={resIcon}
                /> */}
                {/* Restaraunts <i class="fa-solid fa-utensils"></i>
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
            </ul> */}
          </aside>
          {/* <div className="grid m-left">
            <label htmlFor="online">
              Online Only
              <input type="checkbox" id="online" className="margin-top" />
            </label>

            <label htmlFor="in-store">
              Has Store
              <input type="checkbox" id="in-store" className="margin-top" />
            </label>
          </div> */}
        </div>
      </div>

      {/* <div className="index-container test-b2">
        {display?.map((business, idx) => {
          return <Card business={business} key={idx} />;
        })}
      </div> */}
      <div className="col-3 index-map">
        <MapContainer businesses={display} />
      </div>
    </div>
  );
}
