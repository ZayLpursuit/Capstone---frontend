import axios from "axios"
import { useEffect, useState } from "react"
import auth from "../base"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';




export default function Profile({currentUser}){
const [user,setUser]=useState({})
const navigate=useNavigate()


useEffect(()=>{
   axios.get(`http://localhost:7777/users/emails/${currentUser.email}`).then((res)=>setUser(res.data[0])).then(()=>console.log(user))
},[])

    return (
        <div className="profile-container">
            <aside>
            </aside>
                {auth.currentUser?
               <div className="center-text white"> Welcome Back {auth.currentUser.email} </div>: <>Signed Out</>}
                <div className="profile-options col2">

                    <div className="profile-cards  grid" onClick={()=>navigate("/")}> 
                    <div>< HomeIcon/></div>
                    
                    
                    Home</div>

                    <div className="profile-cards grid" onClick={()=>navigate("/index")}>
                        <div>< ExploreIcon/></div>
                         
                     Explore </div>

                    <div className="profile-cards grid " onClick={()=>navigate("/")}>
                        <div className="profile-icons" >
                        < FavoriteIcon/></div>
                        Favorites</div>

                    <div className="profile-cards grid" onClick={()=>navigate(`/profile/edit/${user.username}`)}>
                        <div>
                        < ManageAccountsIcon className="profile-icons"/>
                        </div> Manage your Account</div>
                    
                </div>
            <div>
                {auth.currentUser?
               <> Welcome Back {auth.currentUser.email} </>: <>Signed Out</>}

               {user?<>{user.first_name}
               
               {user.last_name}
               {user.username}</>:<>not working</>}
            </div>

        </div>
    )
}