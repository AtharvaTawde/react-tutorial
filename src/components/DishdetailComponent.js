import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	renderDish(dish) {
		if (dish != null) {
			return (
				<Card>
					<CardImg width="100%" object src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	renderComments(c) {
		if (c != null) {
			const comments = c.map(commentObject =>
				<div className='list-unstyled'>
					<p>{commentObject.comment}</p>
					<p>--{commentObject.author}, {commentObject.date}</p>
				</div>
			);

			return (
				<div>
					<h4>Comments</h4>
					<li className="list-unstyled">{comments}</li>
				</div>
			);

		} else {
			return (
				<div></div>
			);
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					{this.renderDish(this.props.selectedDish)}
				</div>
				<div className="col-12 col-md-5 m-1">
					{this.renderComments(this.props.selectedDishComments)}
				</div>
			</div>
		);
	}

}

export default DishDetail;