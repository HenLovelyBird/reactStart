import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import MyNavComponent from './MyNavComponent';
import MyFooterComponent from './MyFooterComponent';
import WelcomComponent from './WelcomeComponent';
import MyBookstore from "../data/fantasy.json"
import LatestReleaseComponent from './LatestReleaseComponent';


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
                      <WelcomComponent> </WelcomComponent>
                   </Col>
                   <Col md="12">
                    {MyBookstore.map((bookEntry, index) => 
                        <LatestReleaseComponent book={bookEntry} key={index} />
                    )}
                </Col>

                {/* <Col md="12">
                    {this.state.myArray.map((entry, index) => <h2 key={index}>{entry}</h2>)}
                </Col> */}
                   <Col md="12">
                      <MyFooterComponent> </MyFooterComponent> 
                   </Col>
               </Row>
            </Container>
        );
    }
}

export default MainComponent;