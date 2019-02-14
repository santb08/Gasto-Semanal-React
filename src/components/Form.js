import React, { Component } from 'react';

class FormularioGasto extends Component {

    //refs for form inputs
    refExpenseName = React.createRef();
    refQuantity = React.createRef();


    createNewExpense = (e) => {
        //Prevent default
        e.preventDefault();

        //Create object with expenses
        const expense = {
            name: this.refExpenseName.current.value,
            quantity: this.refQuantity.current.value
        };

        console.log(expense);
        //Add and send it
        this.props.addExpense(expense);

        //Reset
        e.currentTarget.reset();
    };

    render(){
        return (
            <form onSubmit={this.createNewExpense}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.refExpenseName} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.refQuantity} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default FormularioGasto;