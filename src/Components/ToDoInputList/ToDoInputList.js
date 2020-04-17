import React from 'react';
import './ToDoInputList.css';
import List from '../List/List';

/**
 *Main module of todo list 
 */
class ToDoInputList extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      value:'',
      data:[]
     }; 
     this.handleChange = this.handleChange.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
     this.handleDone = this.handleDone.bind(this);
    }
  
  // handling bind values from list item  
  handleDone(status,index){
      if (~index) {
        this.setState(prevState =>{
          let newItem = {
            task:this.state.data[index].task,
            done:status
          }
          prevState.data.splice(index, 1,newItem)
                return {
                    data:prevState.data
  }});}}

  //handling change of input values and setting the state of input
  handleChange(event){
     this.setState({value:event.target.value});
  }

  // handling add the values of input to the array of data for list
  handleAdd(event){
    if(this.state.value !== ""){
    this.setState(prevState =>{
      return {
        value:"",
        data: this.state.data.concat({
          task:prevState.value,
          done:false
        })  
      }});
    }else{
      alert("Please Enter the task name Before adding!")
    }  
    event.preventDefault();
  }

  render(){ 
    return(
    <div>   
    <h2 className="heading">** To Do List **</h2>  
    <div className="card">
      <div className="container">
     <form >
       <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
       <button className="add_button" onClick={this.handleAdd}>Add</button>
     </form>
     <List list={this.state.data} remove={this.handleDone}/>
     </div>
    </div>
    </div> 
    ) 
  };
}

export default ToDoInputList;
