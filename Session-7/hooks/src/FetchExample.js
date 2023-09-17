import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function FetchExample() {

  const [data,setData] = useState(null);

  useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data)=> setData(data));
  },[])

  

  return (
    <div>
      <h1>My ToDo App</h1>
      <table>
      {data && data.map((item)=>{
        return <tr>
            <td>
            {item.id}
            </td>
            <td>
            {item.title}
            </td>
        </tr>
      })}
    </table>
    </div>
  );
}

export default FetchExample;
