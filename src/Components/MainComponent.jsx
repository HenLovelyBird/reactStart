import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import MyNavComponent from './MyNavComponent';
import MyFooterComponent from './MyFooterComponent';


class MainComponent extends React.Component {
    state ={ }
    render() {
        return (
            <Container>
               <Row>
                   <Col md="12">
                      <MyNavComponent> </MyNavComponent> 
                   </Col>
                   <Col md="12">
                      <MyFooterComponent> </MyFooterComponent> 
                   </Col>
               </Row>
            </Container>
        );
    }
}

export default MainComponent;