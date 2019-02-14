import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import BudgetControl from './components/BudgetControl';
import './css/App.css';
import {validarPresupuesto} from "./helper";

class App extends Component {

  state = {
    budget: '',
    remaining: '',
    expenses: {}
  };


  obtenerPresupuesto = () => {
    let budget = prompt("¿Cuál es el presupuesto?");
    let result = validarPresupuesto(budget);
    if(result){
      this.setState({ budget , remaining : budget});
    } else {
      this.obtenerPresupuesto();
    }
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  //Adds a new expense to state
  addExpense = expense => {
    //Take a copy of the actual state
    const expenses = {...this.state.expenses};
    //Add expense to the state copy
    expenses[`gasto${Date.now()}`] = expense;
    //getRemaining
    this.getRemaining(expense.quantity);
    //Put it on state
    this.setState({
        expenses
    });
  };

  //Substract from the budget when any expense is saved
  getRemaining = (quantity) => {
    //Read expense
    let num = Number(quantity);

    //Copy state
    let total = this.state.remaining;

    //calc
    total -= num;
    this.setState({ remaining: total })
  };

  render() {
    return (
        <div className="App container">
          <Header titulo="Gasto semanal"/>
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Form addExpense={this.addExpense}/>
              </div>
              <div className="one-half column">
                <List expenses={this.state.expenses}/>
                <BudgetControl
                    budget = {this.state.budget}
                    remaining = {this.state.remaining}
                />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
