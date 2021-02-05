import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Login from './login';
import Register from './register';

class Dropdown extends React.Component {
  render(){
    return(
      <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item><Login/></Nav.Item>
  <Nav.Item><Register/></Nav.Item>
</Nav>
     </div>
    )
  }
}
export default Dropdown;
