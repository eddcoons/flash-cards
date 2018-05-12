import React from 'react';

class Results extends React.Component {
		render() {
			return(
				<div className={this.props.showFront ? 'results-hidden' : ''}>
					<div onClick={this.props.nextCard}>Right!</div>
					<div onClick={this.props.nextCard}>Wrong!</div>
				</div>
			)
		}
}

export default Results;
