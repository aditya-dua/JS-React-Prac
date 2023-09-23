import logo from './logo.svg';
import './App.css';

function Car(props) {


  if(props.flag == "true"){
    return (
    
      <div>
          The name is {props.name}
          <h1 id={props.car.name}>Car Details: {props.car.name}</h1>
          <h2>Car Company: {props.car.company}</h2>
          <h2>Car Variant: {props.car.variant}</h2>
      </div>

  );
  }else{
    return (
      <div>
        <h1>No Car details are present</h1>
      </div>
    )
  }
  
}

export default Car;
