import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import useFetch from './useFetch';
import useSI from './useSI';
import useCurrencyConverter from './useCurrencyConverter';

function FetchHooks() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  let obj = {
    pri :1000,
    rate:10,
    time:1
  }

  let currency= {
    price:55,
    from:"USD",
    to:"INR"
  }
  
  const [interest] = useSI(obj)
  const [price] = useCurrencyConverter(currency)

  return (
    <div>
      <h1>My ToDo App </h1>
      <p>{price}</p>
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
      {interest}
    </div>
  );
}

export default FetchHooks;
