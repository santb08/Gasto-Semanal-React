import React, { Component } from "react";
import { revisarPresupuesto } from '../helper';

class Remaining extends Component {
    render(){
        const {remaining, budget} = this.props;
        return (
            <div className={revisarPresupuesto(budget, remaining)}>
                Remaining: $ {this.props.remaining}
            </div>
        )
    }
}

export default Remaining;