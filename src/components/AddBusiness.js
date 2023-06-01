import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function AddBusiness(){

    const navigate=useNavigate()

    const [form,setForm]=useState({name:"",address:"", contact_num:"",year_opened:"",is_online:false,is_store:false,img:"",category:"",website:"",description:""})

    function handleChange(e){
        setForm({...form,[e.target.id]:e.target.value})

        if(e.target.id==="is_online"){
            e.target.value=true
        }

        if(e.target.id==="is_store"){
            e.target.value=true
        }
        
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post(`http://localhost:7777/businesses`,form).then(navigate("/businesses"))
    }

    return (
        <div className="add-biz-sect">
            <div className="add-biz-info">
                <h1>Show Your Support and Add a Blackowned Business Today!</h1>
            </div>
           <div className=" ">
                <form className="d-grid pad w-80 centered" onSubmit={(e)=>handleSubmit(e)}>
                <h1 className="center-text">Add a Business</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={form.name} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={form.address} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="contact_num">Email</label>
                <input type="phone-number" id="contact_num" value={form.contact_num} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="year_opened">Year Opened</label>
                <input type="text" id="year_opened" value={form.year_opened} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="is_online">Online?</label>
                <input type="checkbox" id="is_online" value={form.is_online} />

                <label htmlFor="is_store">Has a Store?</label>
                <input type="checkbox" id="is_store" value={form.is_store} />

                <label htmlFor="img">Image</label>
                <input type="text" id="img" value={form.img} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" value={form.category} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="website">Website</label>
                <input type="text" id="website" value={form.website} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="description">Description</label>
                <textarea id="description" value={form.description} onChange={(e)=>handleChange(e)}/>

                <div>
                <button type="submit" className="biz-btn" >Add Business</button>
                </div></form>
        </div>
        </div>
    )
}