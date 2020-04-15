import React from 'react';
import './ToDoInputList.css';
import List from '../List/List';

class ToDoInputList extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      input:'',
      data:[]
     }; 
     this.handleChange = this.handleChange.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
   }

   handleChange(event){
     this.setState({input:event.target.value});
   }

   handleAdd(event){
    this.setState(prevState =>{
      return {
        input:'',
        data: [...prevState.data,prevState.input]  
      }
    });
    event.preventDefault();
  }

  render(){ 
    return( 
    <div>  
     <form >
       <button onClick={this.handleAdd}>Add</button>
       <input type="text" value={this.state.value} onChange={this.handleChange} />
     </form>
     <List list={this.state.data} />
    </div> 
    ) 
  };
}

export default ToDoInputList;
