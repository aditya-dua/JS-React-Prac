import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [message,setMessage] = useState("Hello World");
  return (
    <div className="App">
      <h1>{message}</h1>

      <button type="button" onClick={()=> setMessage("Hello Aditya")}>Click me to change the message</button>
    </div>
  );
}

export default App;
