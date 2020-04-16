import React from 'react';
import './ToDoInputList.css';
import List from '../List/List';

class ToDoInputList extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      input:'',
      data:[

      ]
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
        data: [...prevState.data,{
          task:prevState.input,
          done:false
        }]  
      }
    });
    event.preventDefault();
  }

  render(){ 
    return( 
    <div className="card">  
      <div className="container">
     <form >
       <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
       <button className="add_button" onClick={this.handleAdd}>Add</button>
     </form>
     <List list={this.state.data} />
     </div>
    </div> 
    ) 
  };
}

export default ToDoInputList;
