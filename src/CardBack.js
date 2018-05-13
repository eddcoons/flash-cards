import React from 'react';

class CardBack extends React.Component {
		render() {

			const { title, artist, medium, year } = this.props;
			return(
					<div
						// onClick={this.props.flipCard}
						className={`
							back
							${this.props.showFront ? 'hidden' : 'card-wrapper'}
						`}>
							<h2>{title}</h2>
							<h3>{artist}</h3>
							<h4>{medium}</h4>
							<h4>{year}</h4>
							<div className="card">This is the back of the card</div>
					</div>

			)
		}
}

export default CardBack;
