import React from 'react';
import './App.css';
import ToDoInputList from './Components/ToDoInputList/ToDoInputList';

class App extends React.Component{
  render(){
    return(
      <div className="main-background"> 
      <ToDoInputList/>
      </div>
    )
  }
}

export default App;
