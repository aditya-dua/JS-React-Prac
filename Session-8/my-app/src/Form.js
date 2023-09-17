import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

function Form() {

  const usernameRef= React.createRef();
  const passwordRef= React.createRef();


  function submitClicked(e){
    e.preventDefault();
    console.log("Details:"+usernameRef.current.value+"  "+passwordRef.current.value);
  }

  return (
    <div>
      <form onSubmit = {submitClicked}>
        <input type="text" placeholder="Enter Username" ref={usernameRef}></input>
        <br></br>
        <input type="text" placeholder="Enter Password" ref={passwordRef}></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Form;
