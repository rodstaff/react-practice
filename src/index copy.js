mport React from 'react';
import ReactDOM from 'react-dom';

// Example 1
// App that add friends to existing list using input box
//

var FriendsContainer = React.createClass({
  getInitialState:  function() {
    return {
      name:  'Rod Samantha',
      friends:  ['John Coltrane', 'Diana Smith', 'Wilton Burns']
    };
  },
  addFriend: function(friend) {
    this.setState({
      friends: this.state.friends.concat([friend])
    });
  },
  render: function(){
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
});

var AddFriend = React.createClass({
  getInitialState: function() {
    return {
      newFriend: ''
    };
  },
  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },
  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    });
  },
  handleAddNew: function() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    );
  }
});

var ShowList = React.createClass({
  getDefaultProps: function() {
    return {
      names: []
    };
  },
  render: function() {
    var listItems = this.props.names.map(function(friend) {
      return <li>{friend}</li>
    });
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <FriendsContainer />, document.getElementById('app1')
);

// Example 2
// Real-Time Search
//

var SearchExample = React.createClass({
  getInitialState:  function() {
    return {
      searchString: ''
    };
  },
  handleChange: function(e) {
    this.setState({
      searchString: e.target.value
    });
  },
  render: function() {
    var libraries = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0) {
      libraries = libraries.filter(function(l) {
        return l.name.toLowerCase().match(searchString);
      });
    }
  
    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type and search here" />
        <ul>
          {libraries.map(function(l) {

            return (
              <li key={l.id}>{l.name} <a href={l.url}>{l.url}</a></li>
            );

          } )}
        </ul>
      </div>
    );
  }
});

var libraries = [
  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
  { name: 'AngularJS', url: 'https://angularjs.org/'},
  { name: 'jQuery', url: 'http://jquery.com/'},
  { name: 'Prototype', url: 'http://www.prototypejs.org/'},
  { name: 'React', url: 'http://facebook.github.io/react/'},
  { name: 'Ember', url: 'http://emberjs.com/'},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
  { name: 'Dojo', url: 'http://dojotoolkit.org/'},
  { name: 'Mootools', url: 'http://mootools.net/'},
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
  { name: 'Lodash', url: 'http://lodash.com/'},
  { name: 'Moment', url: 'http://momentjs.com/'},
  { name: 'Express', url: 'http://expressjs.com/'},
  { name: 'Koa', url: 'http://koajs.com/'},
];

ReactDOM.render(
  <SearchExample items={libraries} />, document.getElementById('app1')
);





