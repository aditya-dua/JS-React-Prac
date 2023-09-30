import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link,Routes,Route, useParams,useMatch} from "react-router-dom"
import Student from './Student';

function NestedRoute() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
       
        
      </ul>

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/courses" Component={Courses}></Route>
        <Route path="/*" Component={NotFoundRoute}></Route>
        
      </Routes>

    </Router>
  );
}

const Home = () => <h1>Home</h1>

const NotFoundRoute = () =>(
  <h1>
    <p>Not Found</p>
    <Link to ="/">Not Found, Go Back to Home</Link>
  </h1>
)

const Courses= ()=>{
  let match = useMatch();

  return(
    <div>
      <h2>Courses</h2>
      <ul>
        <li>
          <Link to={`${match.uri}/introduction`}>Introduction to React</Link>
        </li>
        <li>
          <Link to={`${match.uri}/fullStack`}>Full Stack MERN</Link>
        </li>
        <li>
          <Link to={`${match.uri}/express`}>Introduction To Express</Link>
        </li>
      </ul>
      
      <Routes>
        <Route path={match.path}>
          <h3>Select Your Course</h3>
        </Route>
        <Route path={`${match.path}/:courseName`} Component={course}>
          
        </Route>
        
        
      </Routes>

    </div>
  )
}

const course=()=>{
  const {courseName}=useParams;

  return(
    <div>
      <h3>{courseName}</h3>
    </div>
  )
}

export default NestedRoute;
