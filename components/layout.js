import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component { 
  constructor() {
  	super();
  	this.state = {
  	  title:  "Hello, Hello!"
  	};
  }

  changeTitle(title) {
    this.setState({title});  //same as {title:  title} in ES6
  }

  render() {
    // setTimeout(()=> {
    //   this.setState({title: "Yellow, Yellow!"});
    // }, 2500);
    // const title = "Welcome to Glendale!"

    return ( 
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

// export default class Layout extends React.Component { 
//   constructor() {
//   	super();
//   	this.state = {name: "Charlie"}
//   }; 
  
//   render() {
//   	var list = [
//       <Header />,
//       <Header />,
//       <Footer />,
//       <Footer />
//   ];
//     setTimeout(() => {
//       this.setState({name: "Jerry"});
//     }, 2000)
//     return ( 
//       <div>
//         {this.state.name}, {list}
//       </div>
//     );
//   }
// }

