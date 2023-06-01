import { useNavigate } from "react-router-dom"


export default function Card({business,key}){

    const navigate = useNavigate()
return (
    <div key={key} className="test-d" onClick={()=>navigate(`/businesses/${business.id}`)}>
     <img src={business.img} alt='some-pic' className="card-img"/>

     <div className="card-details">
        <h6>{business.name}</h6>
        <p>Established in {business.year_opened} </p>
   </div>
    </div>
)
}