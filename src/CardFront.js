import React from 'react';

class CardFront extends React.Component {

		render() {
			return(
				<div
					onClick={this.props.flipCard}
					className={`
						front
						${this.props.showFront ? 'card-wrapper' : 'hidden'}
					`} >
					<img src={this.props.image} />
					<div className="card" >This is the front of the card</div>
				</div>
			)
		}
}

export default CardFront;
