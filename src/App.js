import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import IndexPage from "./components/IndexPage";
import Nav from "./components/nav/Nav";
import Profile from "./components/Profile";
import auth from "./base";
// import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import EditProfile from "./components/EditProfile";
import Show from "./components/Show";
import Resources from "./components/Resources";
import AddBusiness from "./components/AddBusiness";
import Footer from "./components/Footer";
// import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";


const API = process.env.REACT_APP_API_URL;

function App() {
  // const [currentUser, setcurrentUser] = useState(getAuth().currentUser||null);
  const [business, setBusiness] = useState([]);
  
  // useEffect(()=>{

  //   auth.onAuthStateChanged((user) => {
  //     setcurrentUser(user);
  //   });

  //   setPersistence(getAuth(),browserLocalPersistence)

  // }, [])
  
  useEffect(() => {
    axios
      .get(`${API}/businesses/`)
      .then((res) => {
        // console.log(res.data);
        setBusiness(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, []);

  // console.log("current user app.js", currentUser.email)

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/get-started" element={<SignUp  currentUser={currentUser}/>} /> */}
        <Route path="/businesses" element={<IndexPage />} />

        <Route path="/businesses/:id" element={<Show/>} />
        {/* <Route
          path="/profile"
          element={<Profile currentUser={currentUser} business={business} />}
        /> */}
        {/* <Route path="/profile/edit/:user" element={< EditProfile/>} /> */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/add-business" element={<AddBusiness />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
