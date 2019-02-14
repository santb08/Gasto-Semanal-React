import React, { Component } from 'react';


class Expense extends Component {
    render(){
        const {name, quantity} = this.props.expense;
        console.log(name, quantity);
        return (
            <li className="gastos">
                <p>
                    {name}
                    <span className="gasto"> $ {quantity} </span>
                </p>
            </li>
        );
    }
}

export default Expense;