import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Form() {
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");

  function submitClicked(e){
    e.preventDefault();
    console.log("Details:"+username+"  "+password);
  }

  return (
    <div>
      <form onSubmit = {submitClicked}>
        <input type="text" placeholder="Enter Username" value={username} onChange={e=>setUsername(e.target.value) }></input>
        <br></br>
        <input type="text" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value) }></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Form;
