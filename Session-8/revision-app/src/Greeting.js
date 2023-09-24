import logo from './logo.svg';
import './App.css';
import React from 'react';
import StateExample from './StateExample';
import LifecycleComponent from './LifecycleComponent';

class Greeting extends React.Component{

  constructor(props){

    super(props);
    this.state = {date:new Date()}
  }

  render(){
    return(
      <div>
        <h1>Greetings from class component</h1>
        <h2>The current time is :{ this.state.date.toLocaleDateString()}</h2>
        <StateExample></StateExample>
        <LifecycleComponent></LifecycleComponent>
      </div>
    ); 
  }
}


export default Greeting;
