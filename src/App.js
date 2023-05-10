
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import SignUp from './components/SignUp';
import IndexPage from './components/IndexPage';

function App() {
  return (
  <Router>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/get-started' element={<SignUp/>}/>
      <Route path='/index' element ={<IndexPage/>}/>

      
    </Routes>
  </Router>
  );
}

export default App;
