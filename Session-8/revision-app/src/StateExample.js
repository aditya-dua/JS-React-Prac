import React from 'react';


class StateExample extends React.Component{
   
    constructor(props){
        super(props);
        this.state={message: "Hello World!"};
       
        this.handleClick= this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({message:"Hello Aditya"})
        console.log(this.state.message)
        console.log(e)
    }

    render(){
        return <h1 onClick={this.handleClick}>{this.state.message}</h1>
    }
}

export default StateExample;