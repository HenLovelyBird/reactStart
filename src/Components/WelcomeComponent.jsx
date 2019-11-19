import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class WelcomeComponent extends React.Component {
    state = {  }
    render() { 
        return (  
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Welcome to My Bookstore!</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
        );
    }
}
export default WelcomeComponent;