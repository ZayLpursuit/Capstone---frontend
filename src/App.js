import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import IndexPage from "./components/IndexPage";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import auth from "./base";
// import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import EditProfile from "./components/EditProfile";
import Show from "./components/Show";
import Resources from "./components/Resources";
import AddBusiness from "./components/AddBusiness";
import axios from "axios";



function App() {
  const [currentUser, setcurrentUser] = useState({});
const [user, setUser] = useState([])

  auth.onAuthStateChanged((name) => {
    setcurrentUser(name);
    console.log("user", name)
  });

  useEffect(() => {
    if (currentUser) {
      console.log("current user", currentUser)
      axios.get(`http://localhost:7777/users/emails/${currentUser.email}`)
      .then((res) => {
          console.log("res", res)
          setUser(res.data[0])
      })
    }
   
},[currentUser])

  // console.log("current user app.js", currentUser.email)

  return (
    <Router>
      <Nav currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<SignUp />} />
        <Route path="/businesses" element={<IndexPage />} />
          <Route path='/businesses/:id' element={<Show currentUser={currentUser}/>}/>
          <Route path="/profile" element={< Profile currentUser={currentUser}/>} />
          {/* <Route path="/profile/edit/:user" element={< EditProfile/>} /> */}
            <Route path="/resources" element={<Resources/>} />
            <Route path="/add-business" element={<AddBusiness/>} />

      </Routes>
    </Router>
  );
}

export default App;
