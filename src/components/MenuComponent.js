import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedDish: null,
			selectedDishComments: null, 
		}

		console.log("Menu Component constructor is invoked.");
	}

	componentDidMount() {
		console.log("Menu Component is mounted.");
	}

	onDishSelect(dish) {
		// cannot directly say this.state.selectedDish = dish; 
		this.setState({ selectedDish: dish })
		this.setState({ selectedDishComments: dish.comments })
	}

	render() {
		console.log("Menu Component is rendered.");
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width="100%" object src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					{menu}
				</div>
				<DishDetail selectedDish={this.state.selectedDish} selectedDishComments={this.state.selectedDishComments} />
			</div>
		);
	}

}

export default Menu;