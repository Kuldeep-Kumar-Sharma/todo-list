import React from 'react';
import './List.css';

class List extends React.Component{
  render(){ 
    return this.props.list.map( (element,index) =>
<li key={element.toString()}>
    {element}
  </li>
    )
  };
}

export default List;
