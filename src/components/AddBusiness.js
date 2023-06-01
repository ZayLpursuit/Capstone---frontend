import { useState } from "react"


export default function AddBusiness(){

    const [form,setForm]=useState({name:"",address:"", contact_num:"",year_opened:"",is_online:"",is_store:"",img:"",category:"",website:"",description:""})

    function handleChange(e){
        setForm({...form,[e.target.id]:e.target.value})
    }


    return (
        <div className="newBusiness">
           <div className="border  centered">
                <form className="d-grid pad">
                <h1 className="center-text">Add a New Business</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={form.name} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={form.address} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="contact_num">Email</label>
                <input type="phone-number" id="contact_num" value={form.contact_numl} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="year_opened">Year Opened</label>
                <input type="text" id="year_opened" value={form.year_opened} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="is_online">Online?</label>
                <input type="checkbox" id="is_online" value={form.is_online} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="is_store">Has a Store?</label>
                <input type="checkbox" id="is_store" value={form.is_online} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="img">Image</label>
                <input type="text" id="img" value={form.img} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="category">Category</label>
                <input type="text" id="category" value={form.category} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="website">Password</label>
                <input type="text" id="website" value={form.website} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="description">Description</label>
                <textarea id="description" value={form.description} onChange={(e)=>handleChange(e)}/>

                <div>
                <button type="submit" className="form-btns" >Add Business</button>
                </div></form>
        </div>
        </div>
    )
}