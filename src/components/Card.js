import { useNavigate } from "react-router-dom"


export default function Card({business,idx}){

    const navigate = useNavigate()
return (
    <div key={idx} className="index-card" onClick={()=>navigate(`/businesses/${business.id}`)}>
        <img src={business.img} alt={business.name} className="card-img" />
        <br />
        <br/>
        <h6>{business.name}</h6>
        <p>Established in {business.year_opened} </p>
    </div>
)
}