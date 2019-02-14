import React, { Component } from "react";
import Budget from "./Budget";
import Remaining from "./Remaining";

class BudgetControl extends Component {
    render(){
        return (
            <React.Fragment>
                <Budget
                    budget={this.props.budget}
                />
                <Remaining
                    budget={this.props.budget}
                    remaining={this.props.remaining}
                />
            </React.Fragment>
        )
    }
}

export default BudgetControl;