import logo from './logo.svg';
import './App.css';
import React from 'react';

const themes = {
  light:{
    backgroundColor: "#FFF",
    color:"#000"
  },
  dark:{
    backgroundColor: "#000",
    color:"#FFF"
  }
}

const ThemeContext = React.createContext(themes.light);


function Context() {

  const [theme,setTheme]= React.useState(themes.light);
  const toggleTheme = ()=>
  setTheme((t)=>(t==themes.light?themes.dark:themes.light));

  return(
    <div className='App'>
      <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
        <Toolbar></Toolbar>
        <Panel></Panel>
      </ThemeContext.Provider>
    </div>
  )

}

function Toolbar(){
  return <ThemedButton></ThemedButton>
}

function ThemedButton(){
  return(
    <ThemeContext.Consumer>
      {({toggleTheme})=>{
        return <button onClick={toggleTheme}>Change Theme</button>
      }}
    </ThemeContext.Consumer>
  )
}
function Panel(){
  return(
    <ThemeContext.Consumer>
      {({theme})=>
      (<div style={{...theme}}>
        <p>Hello World</p>
      </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default Context;
