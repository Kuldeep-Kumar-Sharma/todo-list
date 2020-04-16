import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends React.Component{
  render(){ 
    return this.props.list.map( (element,index) =>
    <div key={element.task.toString()}>
          <ListItem item={element}/> 
    </div>
    )
  };
}

export default List;
