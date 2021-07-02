import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import {Navigate} from './Navigate'


function App() {
  return (
  <Router>
    <Navbar/>
    <Navigate/>
    </Router>
  );
}

export default App;
