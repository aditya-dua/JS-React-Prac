import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link,Routes,Route} from "react-router-dom"
import Student from './Student';

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
          <Link to="/viewStudentDetails/1/Aditya">View Student Details</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/viewStudentDetails/:studentId/:studentName" Component={Student}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/error" Component={NotFoundRoute}></Route>
        <Route path="/*" Component={NotFoundRoute}></Route>
        
      </Routes>

    </Router>
  );
}

const Home = () => <h1>Home</h1>
const Contact = () => <h1>Contact</h1>
const ContactMe = () => <h1>Contact Me</h1>
const Services = () => <h1>Services</h1>

const NotFoundRoute = () =>(
  <h1>
    <p>Not Found</p>
    <Link to ="/">Not Found, Go Back to Home</Link>
  </h1>
)

export default App;
