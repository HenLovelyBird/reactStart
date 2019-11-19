import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class MyNavComponent extends React.Component {
    state = {}
    render() {
        return (
             <Nav>
            <NavItem> 
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Browse</NavLink>
            </NavItem>
          </Nav>              
        );
    }
}

export default MyNavComponent;