import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


export default class DishDetail extends Component{
    constructor(props){
        super(props);

    }

    DetailedDish(dish){
        const renderDish = (dish) => {
            if (dish)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
        const renderComments = (dish) => {
            const Date2String = (date) => {
                const tDate = Date.parse(date);
                const theDate = new Date(tDate);
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return  monthNames[theDate.getMonth()] + ' ' + theDate.getDate() + ', ' + theDate.getFullYear();
            }
            if (dish)
                return(
                    <div>
                        <h4>Comments</h4>
                        {
                            dish.comments.map((comment) =>{
                                return (
                                    <ul className='list-unstyled'>
                                        <li>{comment.comment}</li>
                                        <li>-- {comment.author}&nbsp;,&nbsp;{Date2String(comment.date)}</li>
                                    </ul>
                                )
                            })
                        }

                    </div>
                );
            else
                return(
                    <div></div>
                );
        }
        if (dish){
            return (
                <>
                    <div className='col-12 col-md-5 m-1'>
                            {renderDish(dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                            {renderComments(dish)}
                    </div>
                </>
            )
        }
        else{
            return <div></div>
        }
    }
    render(){
        return (
            <div className='row'>
                {this.DetailedDish(this.props.selectedDish)}
            </div>
        )
    }
}