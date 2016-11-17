//Example 1-1 ES6
import React from 'react';
import ReactDOM from 'react-dom';
class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
         "Apples",
         "Beef",
         "Broccoli",
         "Cabbage",
         "Chicken",
         "Corn Syrup",
         "Duck",
         "Eggs",
         "Fish",
         "Flour",
         "Granola",
         "Hash Browns",
         "Potatoes",
         "Red Pepppers",
         "Soy Sauce",
         "Spinach",
         "String Beans",
         "Tomatoes",
         "Vinegar",
         "Watermelon"  
      ],    
      items: []
    }
  }
  filterList (event) {
    const updatedItems = this.state.initialItems.filter(function(it) {
      return (
        it.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
  this.setState({
      items: updatedItems
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.filterList} placeholder="Search" />
        <List items={this.state.items} />
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return (
            <li key={item}>{item}</li>
          );
        }) }
      </ul>
    );
  }
}
List.propTypes = {
  items: React.PropTypes.array.isRequired
}