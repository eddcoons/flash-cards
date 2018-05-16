import React from 'react';

class ReviewOptions extends React.Component {
    render() {
        return(
            <div>
                <div>Great Work! You got {this.props.correct.length} right. And {this.props.review.length} wrong.</div>
                <div>Review Missed Cards</div>
                <div onClick={this.props.resetApp}>Review All Cards</div>
            </div>
        )
    }
}

export default ReviewOptions;
