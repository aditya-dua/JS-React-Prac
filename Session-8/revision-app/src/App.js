import logo from './logo.svg';
import './App.css';
import Car from './Car';
import Greeting from './Greeting';

function App() {

  const name = "Aditya";
  let num = 10;
  let car = {
    name:"Swift",
    company:"Maruti",
    variant:"VXI"
  }

  return (
    <div className="App">
      My first React App
      <p>Name: {name}</p>
      <p>Square of {num} is {num*num}</p>
      <p>Name(in lower case): {name.toLowerCase()}</p>
      
      <Car car ={car} name="Aditya" flag = "true"></Car>
      <h1>JSX Example</h1>
      <h2>Hello {name},</h2>

      <Greeting></Greeting>
    </div>
  );
}

export default App;
