
import { useState } from "react"


export default function SignUp(){

    const [signIn,setSignIn]=useState(true)
    const [form,setForm]=useState({username:"",password:"", newUsername:"",newPassword:"",email:"",first:"",last:""})
    function handleToggle(e){
    if(e.target.id==="Log-In"){
     setSignIn(false)
    }
    if (e.target.id==="Sign-up"){
        setSignIn(true)
    }

}
function handleChange(e){
    setForm({[e.target.id]:e.target.value})
    }


    return (
        <div className="default-grid">
            <div className="col2 width-70  centered ">
            <div className="btn-toggle">
            <button  className="centered btn-size" id="Log-In" onClick={(e)=>handleToggle(e)}>Log In </button>
            <button  className="centered btn-size" id="Sign-up" onClick={(e)=>handleToggle(e)}>Sign Up</button>
              </div>
            {signIn?(
                <div className="border  centered">
                <form className="d-grid pad">
                <h1 className="center-text">Create a New Account</h1>
                <label forHTML="first">First</label>
                <input type="text" id="first" value={form.first} onChange={(e)=>handleChange(e)}/>

                <label forHTML="last">Last</label>
                <input type="text" id="last" value={form.last} onChange={(e)=>handleChange(e)}/>

                <label forHTML="email">Email</label>
                <input type="email" id="email" value={form.email} onChange={(e)=>handleChange(e)}/>

                <label forHTML="newUsername">Username</label>
                <input type="text" id="newUsername" value={form.newUsername} onChange={(e)=>handleChange(e)}/>

                <label forHTML="newPassword">Password</label>
                <input type="text" id="newPassword" value={form.newPassword} onChange={(e)=>handleChange(e)}/>
                <div>
                <button type="submit" className="form-btns">Log In</button>
                </div>
                </form>
                
                </div>)
                
                :<div className="border  ">
                    <form className="d-grid pad ">
                        <h1 className="center-text">Log into Your Account</h1>
                        <label forHTML="username">Username</label>
                <input type="text" id="username" value={form.username} onChange={(e)=>handleChange(e)}/>

                <label forHTML="password">Password</label>
                <input type="text" id="password" value={form.password} onChange={(e)=>handleChange(e)}/>
               <div>
                <button type="submit" className="form-btns">Sign Up</button>
                </div>
                    </form>
                    </div>}
                </div>
        </div>
    )
}