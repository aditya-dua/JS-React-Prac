import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function StudentNew() {

  const [student,setStudent] = useState({
    name:"Aditya",
    age:25,
    course:"React JS"
  })

  const updateName=()=>{
    setStudent(previousState=>{
      return { ...previousState,name:"Aditya Dua"}
    })
  }
  
  const updateAge=()=>{
    setStudent(previousState=>{
      return { ...previousState,age:30}
    })
  }

  return (
    <div className="App">
      <h1>{student.name}'s Details</h1>
      <h2>{student.name} is {student.age} years old and is enrolled in {student.course}</h2>

      <button type="button" onClick={()=> updateName()}>Click me to change the name</button>
      <button type="button" onClick={()=> updateAge()}>Click me to change the age</button>

      
    </div>
  );
}

export default StudentNew;
