import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function Form() {
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  const [errors, setErrors] = useState(null)

  function getValidationErrors(){
    let err=[];
    if(username.trim()===""){err.push("Username cannot be empty.");}
    if(password.trim()===""){err.push("Password cannot be empty.");}

    return err;
  }
  function submitClicked(e){
    e.preventDefault();
    
    const validationErrors = getValidationErrors();

    if(validationErrors.length>0){
      setErrors(validationErrors);
      return;
    }
    console.log("Details:"+username+"  "+password);
    setErrors(null);
    setUsername("");
    setPassword("");
    
    
  }

  return (
    <div>
      <form onSubmit = {submitClicked}>
        <input type="text" placeholder="Enter Username" value={username} onChange={e=>setUsername(e.target.value) }></input>
        <br></br>
        <input type="text" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value) }></input>

        <ul id="errors">
          {errors ? errors.map((message,index)=><li key={index}>{message}</li>):null}
        </ul>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Form;
