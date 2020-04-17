import React from 'react';
import './ListItem.css';

class ListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     done:this.props.item.done
    }; 
    this.handleToggle = this.handleToggle.bind(this);
   }
  
   //handling the toggle of done and not done task
   handleToggle(event){
    this.setState(prevState =>{
      return {
      done:prevState.done ? false : true
    }
  });
  this.props.remove(this.state.done,this.props.index);
  event.preventDefault();
  }

  // List item
  render(){ 
    return (
      <div>
      <div className={this.state.done ? "list-item-card-done" : "list-item-card"}>{this.props.item.task}</div>
      <button onClick={this.handleToggle}  className={this.state.done ? "status-item-done" : "status-item-not-done"}></button>
      </div>
    )
  }
}

export default ListItem;
