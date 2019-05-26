import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConvertPage extends Component {
  static takeToGreetingPage() {
    window.location = '/greeting';
  }

  render() {

    return (
         <div className="page">
          { window.innerWidth < 1000 && ConvertPage.takeToGreetingPage() }
           <div className="convert-popup">
             {this.props.error ? this.props.message : ` 1 Bitсoin Costs ${this.props.price} ${this.props.label}s`}
            </div>
          </div>
    );
  }
}

const mapStateToProps = state => ({
  label: state.currency.currency,
  price: state.currency.price,
  error: state.currency.error,
  message: state.currency.message
});

export default connect(
    mapStateToProps
)(ConvertPage);
