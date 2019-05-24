import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import currencies from "../db/currencies";

class GreetingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem('name')
    };
  }

  render() {
    console.log(currencies);
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
              <button className="btn btn-primary">Euro</button>
              <button className="btn btn-success">Dollar</button>
              <button className="btn btn-warning">Ruble</button>
              <button className="btn btn-danger">GBP</button>
            </div>
            <div className="padding">
              <Select options={currencies} onChange={option => console.log(option)}/>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = store => ({
  name: store.user.name
});

export default connect(
    mapStateToProps
)(GreetingPage);
