import React, { Component } from 'react'
import Search from './Components/Search'
import Add from './Components/Add'
import Sort from './Components/Sort'
import './Belt.css';
import Tags from './Components/Tags';

export default class Belt extends Component {
  changeComponent() {
    switch(this.props.activeBelt) {
      case "dodaj":
      return <Add add={this.props.add} />;
      case "sortuj":
      return <Sort sort={this.props.sort} />;
      case "szukaj":
      return <Search searchInput={this.props.searchInput} />;
      case "tagi":
      return <Tags tags={this.props.tags} searchTag={this.props.searchTag} />;
      default:
      return null;
    }
  }

  render() {
    return (
      <div className={`belt ${this.props.activeBelt !== "termino" && this.props.activeBelt !== "done" ? "belt--active" : ""}`}>
        {this.changeComponent()}
      </div>
    )
  }
}