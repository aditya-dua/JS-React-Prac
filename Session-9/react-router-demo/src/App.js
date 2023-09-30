import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/" Component={Home}></Route>
        
      </Routes>

    </Router>
  );
}

const Home = () => <h1>Home</h1>
const Contact = () => <h1>Contact</h1>
const Services = () => <h1>Services</h1>

export default App;
