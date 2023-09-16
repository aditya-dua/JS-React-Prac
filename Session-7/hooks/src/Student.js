import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Student() {

  const [name,setName] = useState("Aditya");
  const [age,setAge] = useState("25");
  const [course,setCourse] = useState("React JS");


  return (
    <div className="App">
      <h1>{name}'s Details</h1>
      <h2>{name} is {age} years old and is enrolled in {course}</h2>

      
    </div>
  );
}

export default Student;
