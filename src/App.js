import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Navigate} from './Navigate'


function App() {
  return (
  <Router>
    <div>
      <header>
        <h1>NavBar</h1>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        
      </header>
    </div>
    <Navigate/>
    </Router>
  );
}

export default App;
