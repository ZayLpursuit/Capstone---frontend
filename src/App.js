import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./components/SignUp";
import IndexPage from "./components/IndexPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<SignUp />} />
        <Route path="/index" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
