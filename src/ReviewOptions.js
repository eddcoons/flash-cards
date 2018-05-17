import React from 'react';

class ReviewOptions extends React.Component {
    render() {
        return(
            <div>
                <div>Great Work! You got {this.props.correct.length} right. And {this.props.review.length} wrong.</div>
                <div onClick={this.props.reviewIncorrectCards}>Review the wrong onez</div>
                <div onClick={this.props.resetApp}>Start Over</div>
            </div>
        )
    }
}

export default ReviewOptions;
