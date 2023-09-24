import React from 'react';


class LifecycleComponent extends React.Component{

                constructor(props){
                    super(props);
                    this.state= {name:"Aditya"}
                    
                }

                componentDidMount(){
                    setTimeout(()=>{
                        this.setState({name:"Intellipaat"})
                    },1000)
                }

                shouldComponentUpdate(){
                    console.log("shouldComponentUpdate")
                    return true;
                }

                componentDidUpdate(){
                    console.log("componentDidUpdate")
                }
                
                componentWillUnmount(){
                    console.log("componentWillUnmount")
                }

                render(){
                    return <h1>Hello {this.state.name}</h1>
                }
}

export default LifecycleComponent;