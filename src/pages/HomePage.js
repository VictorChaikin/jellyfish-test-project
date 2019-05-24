import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeName from '../actions/user';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onEnterHandle = event => {
    if (event.which === 13) {
      this.props.saveName(this.state.name);
      localStorage.setItem('name', event.target.value);
      window.location = '/greeting';
    }
  };

  render() {
    return (
        <div className="page">
          <div className="input-popup">
            <input type="text"
                   value={this.state.name}
                   className="name-input"
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
