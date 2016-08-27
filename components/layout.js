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
  render() {
    setTimeout(()=> {
      this.setState({title: "Yellow, Yellow!"});
    }, 2500);
    const title = "Welcome to Glendale!"

    return ( 
      <div>
        <Header dare={"whatever"} title={this.state.title} />
        <Header dare={"from ridgewood with love"} title={"vinegar"}/>
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

