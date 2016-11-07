import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title:  "Tarzan"
    };
  }
  changeTitle(tit) {
    this.setState({
      title: tit
    });
  }
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  handleChange(e) {
      var title = e.target.value;
      this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
   );
  }
}

Header.propTypes = {
    changeTitle: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
}

Header.defaultProps = {
    title: ''
}

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.title}</h1>

    );
  }
}

const Footer = () => {
  return (
    <h4>This is a Footer!</h4>
  );
};

ReactDOM.render(
<Layout />, document.getElementById('root')
);