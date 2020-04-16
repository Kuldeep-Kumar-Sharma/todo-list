import React from 'react';
import './ListItem.css';

class ListItem extends React.Component{
  constructor(props){
    super(props)
    this.handleDone = this.handleDone.bind(this);
  }
  
  handleDone(event){
//handle done or not
    event.preventDefault();
  }
  render(){ 
    return (
      <div>
      <div className="list-item-card">{this.props.item.task}</div>
      <button onClick={this.handleDone} className={this.props.item.done ? "status-item-done" : "status-item-not-done"}></button>
      </div>
    )
  }
}

export default ListItem;
