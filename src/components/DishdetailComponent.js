import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    renderComments(comment) {
        if (comment != null) {
            return (
                <ul key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <h4>Comments</h4>
                                {dish.comments.map(this.renderComments)}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return(
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        )
    }
}

export default DishDetail;
