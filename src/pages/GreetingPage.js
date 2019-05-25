import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import currencies from '../db/currencies';
import { bitCoinValue } from '../actions/currency';
import { Link } from 'react-router-dom';

class GreetingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem('name'),
      currency: ''
    };
  }

  selectCurrency = data => {
    this.props.getCurrencyValue(data);
  };

  render() {
    const EUR = currencies.find(currency => currency.shortHand === 'EUR');
    const USD = currencies.find(currency => currency.shortHand === 'USD');
    const RUB = currencies.find(currency => currency.shortHand === 'RUB');
    const GBP = currencies.find(currency => currency.shortHand === 'GBP');

    return (
        <div className="page">
          <div className="popup">
            <div className="padding">
              Hello {this.state.name} !
            </div>

            <div className="padding">
              Which currency you’d like to use to convert from today’s Bitcoin value ?
            </div>

            <div className="popular-currencies">
              <Link to="/convert">
                <button className="btn btn-primary" onClick={() => this.selectCurrency(EUR)}>
                  Euro
                </button>
              </Link>
              <Link to="/convert">
                <button className="btn btn-success" onClick={() => this.selectCurrency(USD)}>
                  Dollar
                </button>
              </Link>
              <Link to="/convert">
                <button className="btn btn-warning" onClick={() => this.selectCurrency(RUB)}>
                  Ruble
                </button>
              </Link>
              <Link to="/convert">
                <button className="btn btn-danger" onClick={() => this.selectCurrency(GBP)}>
                  GBP
                </button>
              </Link>
            </div>

            <div className="padding currency-select">
              <Select className="select"
                      options={currencies}
                      onChange={option => this.setState({ currency: option })} />
              <Link to="/convert">
                <button className="btn btn-primary"
                        onClick={() => this.selectCurrency(this.state.currency)}>Convert
                </button>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = store => ({
  name: store.user.name,
  price: store.currency.price
});

const mapDispatchToProps = dispatch => ({
  getCurrencyValue: currency => dispatch(bitCoinValue(currency))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GreetingPage);
