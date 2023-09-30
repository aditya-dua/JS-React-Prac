import logo from './logo.svg';
import './App.css';
import {useParams} from "react-router-dom"

function Student() {
  const {studentId,studentName} = useParams()
  return (
    <div>
    <h1>Hello {studentName}</h1>
    <h2>Id:{studentId}</h2>
    </div>
  );
}


export default Student;
