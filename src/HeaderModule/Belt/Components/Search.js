import React, { Component } from 'react'
import './../Belt.css';


export default class Search extends Component {
  state = {
    inputValue: ""
  }

  render() {
    return (
      <div>
        <input autoFocus className="search__input" type="text" placeholder="szukaj" onInput={this.props.searchInput}/>
      </div>
    )
  }
}
