import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

function ExpenseItem(props) {
    return(
        <Card className="expense-item">
            {/*<div>
                <div>{props.date.toLocaleString('en-US',{month:'long'})}</div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div> 
            </div>*/}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}


export default ExpenseItem;