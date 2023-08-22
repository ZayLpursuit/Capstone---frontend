import "./BusinessCard.scss"

import { useNavigate } from "react-router-dom";

import StarRating from "../StarRating";

export default function BusinessCard({ business, idx }) {
  const navigate = useNavigate();


  return (
    <div
      key={idx}
      className="businessCard"
      onClick={() => navigate(`/businesses/${business.id}`)}
    >
        <img
          src={business.img}
          alt={business.name}
          className="businessCard__img"
        />
      <div className="businessCard__name">{business.name}</div>
      <StarRating />
      <p>Established in {business.year_opened} </p>
    </div>
  );
}
