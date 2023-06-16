import axios from "axios"
import { useEffect, useState } from "react"
import auth from "../base"


import { useNavigate } from "react-router-dom";
import AddHomeIcon from '@mui/icons-material/AddHome';
import Card from "./Card";
// import { getAuth } from "firebase/auth";
// import { AutofpsSelectRounded } from "@mui/icons-material";



const styles={
    width:"100px",
    height:"60px"
}


const API =process.env.REACT_APP_API_URL
export default function Profile({currentUser}){
const [user,setUser]=useState([])
const [form,setForm]=useState({})
const [favs,setFavs]=useState([])
    const navigate = useNavigate()

  
    
   
    
    
    useEffect(()=>{

  
        if(currentUser){

        axios.get(`${API}/users/firebase/${currentUser?.uid}`)
        .then((res) => {
          
            setUser(res.data[0])
            setForm(res.data[0])

        })
    }
    },[currentUser])


    useEffect(()=>{

        if(currentUser){
            axios.get(`${API}/users/user/${currentUser?.uid}/favorites`).then((res)=>setFavs(res.data))

        }

    },[currentUser])

   
    
    
    function handleChange(e){
                setForm({...form,[e.target.id]:e.target.value})
                }



    return (
        <div className="profile-container">
            <aside>
            </aside>
                {auth.currentUser?
               <div className="center-text white"> Welcome Back {user?.first_name} </div>: <>Signed Out</>}
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
                    {favs[0]? (
                        favs.map((business,idx)=>{
                            console.log(business)
                            return <div className="user-prof-card"><Card business={business} key={idx}/></div>
                        })
                    ):(
                    <p>You haven't added any businesses to your favorites yet</p>)}

                 </div>

                 <div onClick={()=>navigate("/add-business")}>
                    <h3>Add a Business</h3>
                    <AddHomeIcon style={styles} />
                 </div>
        
                   
                   
                    
                </div>
           

        </div>
    )
}