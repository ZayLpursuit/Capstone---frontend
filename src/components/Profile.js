import axios from "axios"
import { useEffect, useState } from "react"
import auth from "../base"


import { useNavigate } from "react-router-dom";
import AddHomeIcon from '@mui/icons-material/AddHome';
import Card from "./Card";
// import { AutofpsSelectRounded } from "@mui/icons-material";



const styles={
    width:"100px",
    height:"60px"
}

export default function Profile({currentUser,favs}){
const [user,setUser]=useState({})
const [form,setForm]=useState({})
    const navigate = useNavigate()
    
    console.log("currentUser", currentUser,user)

    
    
    useEffect(()=>{
        axios.get(`http://localhost:7777/users/emails/${currentUser.email}`)
        .then((res) => {
            console.log(res)
            setUser(res.data[0])
            setForm(res.data[0])

        })
       
    },[currentUser])

   
    
    
    function handleChange(e){
                setForm({...form,[e.target.id]:e.target.value})
                }



    return (
        <div className="profile-container">
            <aside>
            </aside>
                {auth.currentUser?
               <div className="center-text white"> Welcome Back {auth.currentUser.email} </div>: <>Signed Out</>}
                <div className=" col2">
                
                    <h1>Your Account Info</h1>
                 <form className=" grid  profile-form" >
                <label htmlFor="first">First</label>
                 <input type="text" id="first_name" value={form?.first_name} onChange={(e)=>handleChange(e)}/>
                 <label htmlFor="last">Last</label>
                 <input type="text" id="last_name" value={form?.last_name} onChange={(e)=>handleChange(e)}/>

               <label htmlFor="email">Email</label>
                <input type="email" id="email" value={form?.email} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="newUsername">Username</label>
               <input type="text" id="username" value={form?.username} onChange={(e)=>handleChange(e)}/>

                <label htmlFor="newPassword">Password</label>
                <input type="password" id="password" value={form?.password} onChange={(e)=>handleChange(e)}/>                 <div>
                <button type="submit" className="form-btns" >Submit</button>
               
                
                </div>
                 </form>

                    <h1>Your favorites</h1>
                 <div className="user-favs-section">
                    {favs? (
                        favs.map(business=>{
                            return <div className="user-prof-card"><Card business={business}/></div>
                        })
                    ):
                    <p>You haven't added any businesses to your favorites yet</p>}

                 </div>

                 <div onClick={()=>navigate("/add-business")}>
                    <h3>Add a Business</h3>
                    <AddHomeIcon style={styles} />
                 </div>
        
                   
                   
                    
                </div>
           

        </div>
    )
}