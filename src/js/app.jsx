import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0.01,
      term: 15,
      output: 0
    };

    this.handleBalance = this.handleBalance.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  // creating methods to use in renderer but =>
  // // right now - this method stands alone with no reference to anywhere
  // // // unless it is binded to class App( main class where everything is located)
  // // // // surprisingly it doesn't bind methods to main class automatically,
  // // // // // we have to tell it to bind inside the constructor

//  OVERALL RULE: IF YOU CREATE A METHOD, YOU HAVE TO BIND IT FIRST IN CONSTRUCTOR !

  handleBalance(event) {
// event.target.value - is whereever this handleBalance method used it will takein
//  // the value of that element
    this.setState({ balance: event.target.value });
  }
  handleRate(event) {
    this.setState({ rate: event.target.value });
  }
  handleTerm(event) {
    this.setState({ term: event.target.value });
  }
  // handleOutput(event) {
  //   this.setState({ output: event.target.value });
  // }

  calculate(balance, rate, term) {
    // eslint-disable-next-line no-param-reassign
    balance = this.state.balance;
    // eslint-disable-next-line no-param-reassign
    rate = this.state.rate;
    // eslint-disable-next-line no-param-reassign
    term = this.state.term;
    const p = balance;
    const r = (rate / 100) / 12;
    const n = term * 12;
    const num = (r * (Math.pow((1 + r), n)));
    const den = (Math.pow((1 + r), n) - 1);
    const monthlyPayment = (p * (num / den)).toFixed(2);
    this.setState({ output: monthlyPayment });
  }


  render() {
    // we can use Console.log only in render function
    return (
      <div className='container' style={ { margin: '20%' } } >
        <input
          name='balance'
          type='number'
          onChange={ this.handleBalance }
        />

        <input
          name='rate'
          type='number'
          step='0.01'
          onChange={ this.handleRate }
        />
        <select
          name='term'
          onChange={ this.handleTerm }
        >
          <option
            value='15'
          >
              15
          </option>
          <option
            value='30'
          >
              30
          </option>
        </select>
        < button
          type='submit'
          onClick={ this.calculate }
          style={ { marginLeft: '35%', marginTop: '5%' } }
        >
          Calculate
        </button>
        < h3
          id='output'
          style={ { marginLeft: '30%', marginTop: '5%' } }
        >
          This is Output: { this.state.output }
        </ h3>
      </div>
    );
  }
}
