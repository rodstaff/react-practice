import React from 'react';
import ReactDOM from 'react-dom';

var Greeting = React.createClass({
  getInitialState:  function() {
    return {
    greet:  'what is going on'
    }
  },
  handleChange:  function(e) {
    this.setState({
      greet: e.target.value
    });
  },
  render:  function() {
    return (
      <div>
        <h2>Hey, {this.state.greet} {this.props.name} ?</h2> <br/>
        Change Greeting: <input type="text" value={this.state.greet} onChange={this.handleChange} />
      </div>
    );
  }
});

ReactDOM.render(
  <Greeting name="Toney"/>, document.getElementById('app1')
);




