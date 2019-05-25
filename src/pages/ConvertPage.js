import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConvertPage extends Component {
  render() {
    return (
        <div className="page">
          <div className="popup">
            1 Bitсoin Costs {this.props.price}  {`${this.props.label}s`}
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  label: state.currency.currency,
  price: state.currency.price
});

export default connect(
mapStateToProps
)(ConvertPage);
