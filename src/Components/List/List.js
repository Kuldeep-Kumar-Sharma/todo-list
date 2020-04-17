import React from 'react';
import ListItem from '../ListItem/ListItem';

class List extends React.Component{
  
  //list component for list of array
  render(){ 
    return this.props.list.map( (element,index) =>
    <div key={index.toString()}>
          <ListItem remove={this.props.remove} index={index} item={element}/> 
    </div>
    )
  };
}

export default List;
