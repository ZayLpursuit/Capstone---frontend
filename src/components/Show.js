import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ShowMap from "./ShowMap";


const API = process.env.REACT_APP_API_URL;

const Show = () => {
  const [business, setBusiness] = useState([]);
  // const { name, address, contact_num, year_opened, is_online, is_store, img, category, website, description } = business;
  const { name, address, contact_num, year_opened, img, website, description } =
    business;

  const [key, setKey] = useState("description");
  const [favorite, setFavorite] = useState(false);
  let { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:7777/businesses/${id}`)
            .then((res) => {
                console.log(res.data)
                setBusiness(res.data)
            })
        .catch((c) => console.error("catch", c))
    }, [id])
  

  useEffect(() => {
    axios
      .get(`${API}/businesses/${id}`)
      .then((res) => {
        console.log(res.data);
        setBusiness(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  return (
    <div className="show-page">
      <div className="center-text">
        <img
          src={img}
          alt={name}
          height="400px"
          width="400px"
          className="show-img"
        />
      </div>

      {/* <div className="show-page-map">
    <ShowMap business={business}/>
      </div> */}
      <div className="top-section">

      <div className="show-page-map">
    <ShowMap business={business}/>
      </div>
        <h1 className="show-header">
          {name}{" "}
          <Button variant="warning" onClick={() => setFavorite(!favorite)}>
            {!favorite ? (
              <i className="fa-regular fa-star" id="unfavorite"></i>
            ) : (
              <i className="fa-solid fa-star" id="favorite"></i>
            )}
          </Button>
        </h1>
              <Table bordered hover>
                  <tbody>
          <tr>
            <td>
              <h4>Year Opened: </h4>
            </td>
            <td>
              <h5>{year_opened}</h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Location:</h4>
            </td>
            <td>
              <h5>
              <a href={address ? `http://maps.google.com/?q=${name}` : "N/A"} target="*" className="tb-link">
                  {address}
                </a>
              </h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Website: </h4>
            </td>
            <td>
              <h5>
                <a href={website ? website : "N/A"} target="*" className="tb-link">
                  {website}
                </a>
              </h5>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Phone Number: </h4>
            </td>
            <td>
              <h5>{contact_num ? contact_num : "N/A"}</h5>
            </td>
                      </tr>
                      </tbody>
        </Table>
      </div>
      <div className="bottom-section">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="description" title="Description">
            {description}
          </Tab>
          <Tab eventKey="comments" title="Comments"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Show;
