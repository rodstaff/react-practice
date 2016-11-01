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

// Real-Time Search

// Example 3
// Order Form
//

var ServiceChooser = React.createClass ({
  getInitialState: function() {
    return {
      total: 0
    };
  },
  addTotal: function(price) {
    this.setState({
      total: this.state.total + price
    });
  },
  render: function() {
    var self = this;
    var services = this.props.items.map(function(s) {
          return (
            <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />
          );
    });
    return (
      <div>
        <h1>
          Our services
        </h1>
        <h4 id="services" key={services.id}>
          {services}
          <p id="total">Total<b>${this.state.total.toFixed(2)}</b></p>
        </h4>
      </div>
    );
  }
});

var Service = React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },
  clickHandler:  function() {
    var active = !this.state.active;
    this.setState({
      active: active
    });
    this.props.addTotal(
      active ? this.props.price : -this.props.price
    );
  },
  render: function() {
    return (
      <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
        {this.props.name}:  <b>{this.props.price.toFixed(2)}</b>
      </p>
    );
  }
});

var services = [
  {name: 'Web Development', price: 300},
  {name: 'Design', price: 400},
  {name: 'Integration', price: 250},
  {name: 'Training', price: 220}
];


ReactDOM.render(
  <SearchExample items={libraries} />, document.getElementById('app1')
);

//
// Example 4 Image App w/ AJAX
// Due to changes in the Instagram API, this demo is no longer working. 
// However, the rest of the code, including the AJAX request, is still correct.

var Picture = React.createClass({

    // This component doesn't hold any state - it simply transforms
    // whatever was passed as attributes into HTML that represents a picture.

    clickHandler: function(){
        
        // When the component is clicked, trigger the onClick handler that 
        // was passed as an attribute when it was constructed:

        this.props.onClick(this.props.id);
    },

    render: function(){

        var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');

        return (

            <div className={cls} onClick={this.clickHandler}>
                <img src={this.props.src} width="200" title={this.props.title} />
            </div>

        );

    }

});

var PictureList = React.createClass({

    getInitialState: function(){
        
        // The pictures array will be populated via AJAX, and 
        // the favorites one when the user clicks on an image:
        
        return { pictures: [], favorites: [] };
    },

    componentDidMount: function(){
        
        // When the component loads, send a jQuery AJAX request

        var self = this;

        // API endpoint for Instagram's popular images for the day

        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?';

        $.getJSON(url, function(result){

            if(!result || !result.data || !result.data.length){
                return;
            }

            var pictures = result.data.map(function(p){

                return { 
                    id: p.id, 
                    url: p.link, 
                    src: p.images.low_resolution.url, 
                    title: p.caption ? p.caption.text : '', 
                    favorite: false 
                };

            });

            // Update the component's state. This will trigger a render.
            // Note that this only updates the pictures property, and does
            // not remove the favorites array.

            self.setState({ pictures: pictures });

        });

    },

    pictureClick: function(id){

        // id holds the ID of the picture that was clicked.
        // Find it in the pictures array, and add it to the favorites

        var favorites = this.state.favorites,
            pictures = this.state.pictures;

        for(var i = 0; i < pictures.length; i++){

            // Find the id in the pictures array

            if(pictures[i].id == id) {                  

                if(pictures[i].favorite){
                    return this.favoriteClick(id);
                }

                // Add the picture to the favorites array,
                // and mark it as a favorite:

                favorites.push(pictures[i]);
                pictures[i].favorite = true;

                break;
            }

        }

        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});

    },

    favoriteClick: function(id){

        // Find the picture in the favorites array and remove it. After this, 
        // find the picture in the pictures array and mark it as a non-favorite.

        var favorites = this.state.favorites,
            pictures = this.state.pictures;


        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }

        // Remove the picture from favorites array
        favorites.splice(i, 1);


        for(i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {
                pictures[i].favorite = false;
                break;
            }
        }

        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});

    },

    render: function() {

        var self = this;

        var pictures = this.state.pictures.map(function(p){
            return <Picture id={p.id} src={p.src} title={p.title} favorite={p.favorite} onClick={self.pictureClick} />
        });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }

        var favorites = this.state.favorites.map(function(p){
            return <Picture id={p.id} src={p.src} title={p.title} favorite={true} onClick={self.favoriteClick} />
        });

        if(!favorites.length){
            favorites = <p>Click an image to mark it as a favorite.</p>;
        }

        return (

            <div>
                <h1>Popular Instagram pics</h1>
                <div className="pictures"> {pictures} </div>
                    
                <h1>Your favorites</h1>
                <div className="favorites"> {favorites} </div>
            </div>

        );
    }
});


// Render the PictureList component, and add it to .container.
// I am using an API key for a Instagram test ap. Please generate and 
// use your own from here http://instagram.com/developer/

ReactDOM.render(
    <PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />,
    document.getElementById('container')
);

//
//Example: A counter app
//


var MyCounter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  countAdd: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  countMinus: function() {
    this.setState({
      count: this.state.count - 1
    });
  },
  render: function() {
    return (
      <div className="counter">
        <h1> Counting:  {this.state.count} {this.props.animal} ...zzzzzzzz</h1>
        <button type="button" onClick={this.countAdd}>Increment</button> <br />
        <button type="button" onClick={this.countMinus}>Decrement</button>
      </div>
    );
  }
});


