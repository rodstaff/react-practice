import React from 'react';
import ReactDOM from 'react-dom';



var Greeting = React.createClass({
  getInitialState() => {
    return {
    greet:  'what is going on'
    }
  },
  handleChange (e) => {
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

var ShowList = React.createClass ({
  render: function(){
      var listItems = this.props.names.map(function(friend){
        return <li> {friend} </li>
      });
    return (
      <div>
        <h3>  Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<FriendsContainer name="Rod"/>, document.getElementById('app1'))


