import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeName from '../actions/user';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  componentDidMount() {
    this.setState({ name: sessionStorage.getItem('name') });
  }

  static takeToGreetingPage() {
    window.location = '/greeting';
  }

  onEnterHandle = event => {
    if (event.which === 13) {
      this.props.saveName(this.state.name);
      sessionStorage.setItem('name', event.target.value);
      window.location = '/greeting';
    }
  };

  render() {
    return (
        <div className="page">
          {sessionStorage.getItem('name') !== null && HomePage.takeToGreetingPage()}
          <div className="input-popup">
            <input type="text"
                   value={this.state.name}
                   className="name-input"
                   maxLength="15"
                   placeholder="Enter your name..."
                   onKeyUp={this.onEnterHandle}
                   onChange={e => this.setState({ name: e.target.value })} />
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveName: name => dispatch(changeName(name))
});

export default connect(
    null,
    mapDispatchToProps
)(HomePage);
