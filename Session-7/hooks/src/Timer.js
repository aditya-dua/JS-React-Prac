import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function Timer() {

  const [count,setCount] = useState(0);

  useEffect(()=>{
    let timer = setTimeout(()=>{
      console.log("Use Effect")
      setCount((count)=> count+1);
    },1000)

    return () => clearTimeout(timer)
  },[])

  

  return (
    <div className="App">
      <h1>My Counter App</h1>

      <h2>Count:{count}</h2>
       </div>
  );
}

export default Timer;
