import "./IndexPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import BusinessCard from "../businessCard/BusinessCard";
import { Link, useSearchParams } from "react-router-dom";
// import MapContainer from "../MapContainer";

const API = process.env.REACT_APP_API_URL;

export default function IndexPage({ businesses, findBusinessByPlaceId }) {
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  let allCategories = [
    ...new Map(
      businesses.map((business) => [business.category, business])
    ).keys(),
  ];

  useEffect(() => {
    async function fetchData() {
      if (category) {
        await axios
          .get(`${API}/businesses?category=${category}`)
          .then((res) => {
            setFilteredBusinesses(res.data);
          })
          .catch((c) => console.error("catch", c));
      } else {
        setFilteredBusinesses(businesses);
      }
    }
    fetchData();
  }, [category, businesses, setFilteredBusinesses]);

  const filteredCategory = (e) => {
    setSearchParams({ category: e.target.id });
  };

  return (
    <div className="IndexPage">
      <div className="IndexPage__Categories">
        <h1>Categories</h1>
        <ul>
          {allCategories.map((category) => (
            <Link to={`/businesses?category=${category}`} key={category}>
              <li key={category} id={category} onClick={filteredCategory}>
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="IndexPage__Cards">
        {filteredBusinesses.map((business, id) => {
          return (
            <BusinessCard
              business={business}
              key={id}
              findBusinessByPlaceId={findBusinessByPlaceId}
            />
          );
        })}
      </div>
      <div className="IndexPage__Map">
        {/* <MapContainer businesses={display} /> */}
      </div>
    </div>
  );
}
