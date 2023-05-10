
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import SignUp from './components/SignUp';
import IndexPage from './components/IndexPage';
import Show from './components/Show';

function App() {
  return (
  <Router>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/get-started' element={<SignUp/>}/>
        <Route path='/index' element={<IndexPage />} />
        <Route path='/businesses/:id' element={<Show/>}/>

      
    </Routes>
  </Router>
  );
}

export default App;
