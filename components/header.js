import React from 'react';
import Title from './header/title';

export default class Header extends React.Component {
  render() {

    return (
      <div>
      <Title title={this.props.title} motto={this.props.dare} name = "Tulips" />
      <input />
      </div>
    );
  }
}