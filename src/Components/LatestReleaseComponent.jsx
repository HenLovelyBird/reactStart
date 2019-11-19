import React from 'react';
import { Media } from 'reactstrap';

class LatestReleaseComponent extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Media>
                <Media left href="#">
                    <Media object src={this.props.book.img} alt="book cover image" />
                </Media>
                <Media body>
                    <Media heading>{this.props.book.title}</Media>
                    {this.props.book.category}
                </Media>
            </Media>
        );
    }
}

export default LatestReleaseComponent;