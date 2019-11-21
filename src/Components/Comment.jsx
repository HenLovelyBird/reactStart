import React from 'react';
import { Container, Col, Button, Row, FormGroup, Label, Input} from 'reactstrap';

class Comment extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        errMessage: undefined
    }
    submitComments = async () => {
        this.setState({
                isLoading: true
            });
        
    
    let response = await fetch ("https://strive-school-testing-apis.herokuapp.com/api/comments/",{
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

    render() {
        return (
            <Container flex>
            <div>
                <Row>
                <h3>Comment Form</h3>
                {/* user ID */}
                <FormGroup>
                    <Label for="Id" sm={2}>{this.props.elementId}</Label>
                    <Col sm={10}>
                        <Input type="text" id="{elementId}" placeholder="idInfo" />
                    </Col>
                </FormGroup>
                {/* end user ID */}
                {/* Rating Pulldown Menu */}
                <FormGroup className="">
                        <Label for="rating">{this.props.rate}</Label>
                        <Input type="select" id="ratingNumber">
                        {/* value={this.state.book.rate} onChange={this.handleInput} */}
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                   {/* End Rating Pulldown Menu */}
                {/* Comment Box */}
                <FormGroup className="col-md-6">
                    <Label for="exampleText" lg={5}>Text Area</Label>
                    <Col lg={10}>
                        <Input type="textarea" name="text" placeholder="commentArea" />
                    </Col>
                </FormGroup>
                {/* End Comment Box */}
                {/* Submit Button */}
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit Comments!</Button>
                    </Col>
                </FormGroup>
                {/* End Submit Button */}
                </Row>
                <br/>
                </div>
            </Container>
        );
    }
    }
            
    // componentDidMount = async () => {

    //     console.log("Comments are now loaded")

    //     let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/B123A123");

    //     console.log(response)

    //     let displayComments = await response.json();


    //     this.setState({
    //         isLoading: false,
    //         comments: displayComments
    //     })
    // }
        

export default Comment;

// Add, to each "Comment", a button to DELETE it

// {
//     "comment": "A good book but definitely I don't like many parts of the plot",
//     "rate": 3,
//     "elementId": "0316438960"
//   }

//   Where:
//   - comment is the comment inserted by the user
//   - rate is a value between 1 and 5
//   - elementId is the ASIN of the book
//   - use usual Authentication