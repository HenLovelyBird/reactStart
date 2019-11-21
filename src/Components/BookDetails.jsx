import React from 'react';

class BookDetails extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.selectedBook.img} style={{maxwidth: "100%"}} />
                </div>
                <div className="col-md-8">

                </div>
                
            </div>
        );
    }
}

export default BookDetails;