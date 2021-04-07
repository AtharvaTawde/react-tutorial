import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComments({ dish }) {
	if (dish == null) {
		return (
			<div></div>
		);
	} else {
		const comments = dish.comments.map(commentObject =>
			<li>
				<p>{commentObject.comment}</p>
				<p>--{commentObject.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(commentObject.date)))}</p>
			</li>
		);

		return (
			<div>
				<h4>Comments</h4>
				<ul className="list-unstyled">{comments}</ul>
			</div>
		);
	}
}

function DishDetail(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<RenderComments dish={props.dish} />
				</div>
			</div>
		</div>
	);
}

export default DishDetail;