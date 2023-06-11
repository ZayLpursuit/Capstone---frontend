import { useNavigate } from "react-router-dom"


export default function Card({business,idx}){

    const navigate = useNavigate()
return (
    <div key={idx} className="index-card" onClick={()=>navigate(`/businesses/${business.id}`)}>
     <img src={business.img} alt='some-pic' className="card-img"/>

     <div className="card-details">
        <h6>{business.name}</h6>
        <p>Established in {business.year_opened} </p>
   </div>
    </div>
)
}