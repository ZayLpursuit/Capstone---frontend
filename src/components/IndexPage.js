import { useState } from "react"
import Card from "./Card"


export default function IndexPage(){
// const [category,setCategory]=useState("")
const [display]=useState([{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10},{name:"Mo's Bar",years_opened:10,}])
// [display,setDisplay]
function handleChange(e){
    // setCategory(e.target.value)
}

 return(   
    <div className="index-grid">
        <div className="grid test-b1">
            <div className="m-left">
        <aside className=" ">

           <h1>Select a Category</h1>
        <select onChange={(e)=>handleChange(e)} className="w-40">
        <option value="def"></option>
        <option value="All">All</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Barbershops">Barbershops</option>
            <option value="Banks">Banks</option>
            <option value="Clothing">Clothing</option>
        </select>
        </aside>
        <div className="grid">
        <label htmlFor="online">Online Only
        <input type="checkbox" id="online" className="margin-top"/>
         </label>

        <label htmlFor="in-store">Has Store
        <input type="checkbox" id="in-store" className="margin-top"/>
    
        </label>
        </div>
        </div>
        </div>
       
        <div className="index-container test-b2">
        {display.map((card,idx)=>{
           return <Card business={card}/>
        })}
        </div>
        
    </div>
 
 )
}