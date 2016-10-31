import React from 'react';
import ReactDOM from 'react-dom';

const HelloUser = React.createClass({
  getInitialState:  function(){
  	return {
  	  username:  '@tylermcginnifff'
  	}
  },
  handleChange: function(e){
  	this.setState({
      username: e.target.value
  	});
  },
  render: function(){
  	return (
  	  <div>
  	    Hello {this.state.username} <br/>
  	    Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
  	  </div>
  	);
  }
});

ReactDOM.render(<HelloUser />, document.getElementById('app1'))


